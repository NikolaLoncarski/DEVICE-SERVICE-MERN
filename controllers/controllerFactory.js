const appError = require("../utils/appError");
const tryCatch = require("../utils/tryCatch");

exports.createOne = (Model) =>
  tryCatch(async (req, res) => {
    const doc = await Model.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model) =>
  tryCatch(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);

    res.status(200).json({
      status: "success",
      doc,
    });
  });
exports.deleteOne = (Model) =>
  tryCatch(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.getAll = (Model) =>
  tryCatch(async (req, res, next) => {
    let filter = {};
    const doc = await Model.find(filter);
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
