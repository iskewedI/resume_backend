const mongoose = require('mongoose');
const Joi = require('joi');

const projectSchema = new mongoose.Schema({
  id: { type: String, required: true, minlength: 5, maxlength: 25 },
  name: { type: String, required: true, minlength: 5, maxlength: 50 },
  images: { type: Array, required: true, minlength: 1, maxlength: 10 },
});

projectSchema.plugin(require('mongoose-beautiful-unique-validation'));

const Project = mongoose.model('Project', projectSchema);

function validate(project) {
  const schema = Joi.object({
    id: Joi.string().min(5).max(25).required().messages('ID is required'),
    name: Joi.string().min(5).max(50).required().messages('Name is required'),
    images: Joi.array()
      .min(1)
      .max(10)
      .required()
      .messages('Images array and with at least one image inside is required'),
  }).options({ allowUnknown: true });

  return schema.validate(project);
}

exports.Project = Project;
exports.validate = validate;
exports.projectSchema = projectSchema;
