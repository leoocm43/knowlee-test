const { Schema, model } = require('mongoose');


const pathSchema = new Schema(
  {
    title: String,
    description: String,
    category: {
        type: String,
        enum: ['Web Dev', 'Ux/Ui', 'Dev Ops', 'Data Science', 'Cyber Security']
    },
    topics:
    [{
      type: Schema.Types.ObjectId,
      ref: 'Topic'
    }],
    users:[
      {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Path', pathSchema);
