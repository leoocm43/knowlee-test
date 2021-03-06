const { Schema, model } = require('mongoose');

const topicSchema = new Schema(
  {
    title: String,
    objective: String,
    duration: String, 
    paths: [{
      type: Schema.Types.ObjectId,
      ref: 'Path'
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model('Topic', topicSchema);
