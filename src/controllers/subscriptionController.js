const Subscription = require('../models/Subscription');
const Plan = require('../models/Plan');

exports.createSubscription = async (req, res) => {
  try {
    const { userId, planId } = req.body;

    const plan = await Plan.findById(planId);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + plan.duration);

    const subscription = new Subscription({
      userId,
      planId,
      endDate,
    });

    await subscription.save();
    res.status(201).json(subscription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserSubscription = async (req, res) => {
  try {
    const { userId } = req.params;
    const subscription = await Subscription.findOne({ userId }).populate('planId');
    if (!subscription) return res.status(404).json({ message: 'No subscription found' });

    // Check for expiry
    if (new Date() > subscription.endDate && subscription.status === 'ACTIVE') {
      subscription.status = 'EXPIRED';
      await subscription.save();
    }

    res.status(200).json(subscription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSubscription = async (req, res) => {
  try {
    const { userId } = req.params;
    const { planId } = req.body;

    const plan = await Plan.findById(planId);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });

    const subscription = await Subscription.findOne({ userId });
    if (!subscription) return res.status(404).json({ message: 'Subscription not found' });

    subscription.planId = planId;
    subscription.endDate = new Date(Date.now() + plan.duration * 86400000); // duration in ms
    subscription.status = 'ACTIVE';

    await subscription.save();
    res.status(200).json(subscription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.cancelSubscription = async (req, res) => {
  try {
    const { userId } = req.params;

    const subscription = await Subscription.findOne({ userId });
    if (!subscription) return res.status(404).json({ message: 'Subscription not found' });

    subscription.status = 'CANCELLED';
    await subscription.save();

    res.status(200).json({ message: 'Subscription cancelled' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
