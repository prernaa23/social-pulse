const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    description: String,
    picturePath: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likes: {
      type: Map,
      of: Boolean,
    },
  },
  { timestamps: true }
);

// PostSchema.virtual("properties.popUpMarkup").get(function () {
//   return `
//     <strong><a href="/campgrounds/${this._id}">${this.title}</a><strong>
//     <p>${this.description.substring(0, 20)}...</p>`;
// });

// PostSchema.post("findOneAndDelete", async function (doc) {
//   if (doc) {
//     await Review.deleteMany({
//       _id: {
//         $in: doc.reviews,
//       },
//     });
//   }
// });

module.exports = mongoose.model("Post", PostSchema);
