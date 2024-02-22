const mongoose = require("mongoose");

// Connection creating and creating new Database
mongoose
  .connect("mongodb://0.0.0.0:27017/utkarsh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful...");
  })
  .catch((err) => {
    console.log(err);
  });

//   Defining the Schema of the Documents
// Mongoose Schema defines the sturucture of the documents,
// default values, validator etc.

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 1,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now(),
  },
});

// Creating the Model (i.e. 'Collection'  inside the database)
const PlayList = new mongoose.model("Playlist", playlistSchema);

// Creating and Inserting A single documennt

// Either we can use PROMISE APPROACH

// const reactPlaylistDoc = new PlayList({
//   name: "React",
//   ctype: "Front End",
//   videos: 80,
//   author: "utkarsh",
//   active: true,
// });

// reactPlaylistDoc
//   .save()
//   .then(() => {
//     console.log("Document inserted successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Or we can use ASYNC AWAIT APPROACH

// const createDocument = async () => {
//   try {
//     const reactPlaylistDoc = new PlayList({
//       name: "React",
//       ctype: "Front End",
//       videos: 80,
//       author: "utkarsh",
//       active: true,
//     });

//     const res = await reactPlaylistDoc.save();
//   } catch (err) {
//     console.log(err);
//   }
// };

// createDocument();

//=========================== INSERTING MULTIPLE DOCUMENTS =====================
const insertDocuments = async () => {
  try {
    const reactPlaylistDoc = new PlayList({
      name: "React",
      ctype: "Front End",
      videos: 80,
      author: "utkarsh",
      active: true,
    });
    const JsPlaylistDoc = new PlayList({
      name: "Javascript",
      ctype: "Front End",
      videos: 80,
      author: "utkarsh",
      active: true,
    });
    const NodeJsPlaylistDoc = new PlayList({
      name: "Nodejs",
      ctype: "Back End",
      videos: 80,
      author: "utkarsh",
      active: true,
    });
    const ExpressJsPlaylistDoc = new PlayList({
      name: "Expressjs",
      ctype: "Back End",
      videos: 80,
      author: "utkarsh",
      active: true,
    });
    const MongoPlaylistDoc = new PlayList({
      name: "MongoDb",
      ctype: "Database",
      videos: 80,
      author: "utkarsh",
      active: true,
    });
    const MongoosePlaylistDoc = new PlayList({
      name: "Mongoose",
      ctype: "Database",
      videos: 80,
      author: "utkarsh",
      active: true,
    });

    const res = await PlayList.insertMany([
      reactPlaylistDoc,
      JsPlaylistDoc,
      NodeJsPlaylistDoc,
      ExpressJsPlaylistDoc,
      MongoPlaylistDoc,
      MongoosePlaylistDoc,
    ]);

    console.log(res);
    console.log("Document inserted successfully");
  } catch (error) {
    console.log(error);
  }
};

// insertDocuments();

//========================== READING THE DOCUMENT PRESENT IN THE COLLECTION ================================

const getDocument = async () => {
  try {
    // const data = await PlayList.find();
    // const data = await PlayList.find({ ctype: "Front End" });
    // const data = await PlayList.find({ ctype: "Front End" }, { name: 1 });
    // const data = await PlayList.find({ ctype: "Front End" }, {_id : 0, name: 1 });
    // const data = await PlayList.find(
    //   { ctype: "Front End" },
    //   { _id: 0, name: 1 }
    // ).limit(1);

    //************** */ COMPARISON OPERATOR *********************
    // const data = await PlayList.find({ ctype: { $eq: "Front End" } });
    // const data = await PlayList.find({
    //   ctype: { $in: ["Back End", "Database"] },
    // });

    //******************* */ LOGICAL OPERATOR *******************
    // const data = await PlayList.find({
    //   $or: [{ ctype: "Front End" }, { ctype: "Back End" }],
    // });
    // const data = await PlayList.find({
    //   $nor: [{ name: "React" }, { ctype: "Back End" }],
    // });
    // const data = await PlayList.find({
    //   $and: [{ name: "React" }, { ctype: "Front End" }],
    // });

    //********************* */ COUNT QUERY *************************
    // const data = await PlayList.find({
    //   $and: [{ name: "React" }, { ctype: "Front End" }],
    // }).count();

    // ******************** SORT QUERY ***************************
    // const data = await PlayList.find().sort({ name: 1 });

    console.log("Reading Starting...");
    console.log(data);
    console.log("Reading Finished");
  } catch (err) {
    console.log(err);
  }
};

// getDocument();

// ====================== UPDATING THE DOCUMENT ===================

const updateDocument = async (_id) => {
  try {
    // const res = await PlayList.updateOne(
    //   { _id },
    //   {
    //     $set: { name: "zzzzzzzzzzzzzz" },
    //   }
    // );
    const res = await PlayList.updateMany(
      { ctype: "Front End" },
      {
        $set: { name: "zzzzzzzzzzzzzz" },
      }
    );

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// updateDocument("65226f9525d4de0ea4a02b51");

// =================== DELETEING THE DOCUMENT ========================

const deleteDocument = async (_id) => {
  try {
    // const res = await PlayList.deleteOne({ _id });
    const res = await PlayList.deleteMany({ ctype: "Front End" });
    console.log(res);
    console.log("Finished");
  } catch (error) {
    console.log(error);
  }
};

// deleteDocument("65226f9525d4de0ea4a02b53");
