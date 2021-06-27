// jshint esversion:8
//

const mongoose = require("mongoose");
//
//
// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// };
// mongoose.connect("mongodb+srv://Atishay:WMTU4NnUcnka5rm6@cluster0.upzac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",connectionParams)
//     .then( () => {
//         console.log('Connected to database ');
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     });

const mobileSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "-",
    //required:true
  },
  price: {
    type: Number,
    //required:true
  },
  mainCamera: {
    noOfCameras: {
      type: Number,
      //required:true
    },
    mpixels: [
      {
        pixel: Number,
        description: {
          type: String,
          default: "-",
        },
      },
    ],
  },
  frontCamera: {
    noOfCameras: {
      type: Number,
      //required:true
    },
    fpixels: [
      {
        pixel: Number,
        description: {
          type: String,
          default: "-",
        },
      },
    ],
  },
  brand: {
    type: String,
    default: "-",
    //required:true
  },
  image: {
    type: String,
    default: "-",
    //required:true
  },
  launchDate: {
    type: Date,
    //required:true
  },
  sound: {
    type: String,
    default: "-",
  },
  simType: {
    type: String,
    default: "-",
  },
  display: {
    size: {
      type: String,
      default: "-",
    },
    resolution: {
      type: String,
      default: "-",
    },
    GPU: {
      type: String,
      default: "-",
    },
    category: {
      type: String,
      default: "-",
    },
    other: {
      type: String,
      default: "-",
    },
  },
  processor: {
    operatingSystem: {
      type: String,
      default: "-",
    }, //Android 10
    category: {
      type: String,
      default: "-",
    }, //mediatek dimensity 800U
    core: {
      type: String,
      default: "-",
    }, //octa core
    clockSpeed: {
      type: String,
      default: "-",
    }, //2.4GHz
  },
  network: {
    category: {
      type: String,
      default: "-",
    },
    bluetoothVersion: {
      type: String,
      default: "-",
    },
    nfc: {
      type: String,
      default: "-",
    },
    infrared: {
      type: String,
      default: "-",
    },
    audioJack: {
      type: String,
      default: "-",
    },
  },
  batteryCapacity: {
    type: String,
    default: "-",
  },
  dimensions: {
    width: Number,
    height: Number,
    weight: Number,
  },
  links: {
    amazon: {
      type: String,
      default: "-",
    },
    flipkart: {
      type: String,
      default: "-",
    },
    images: Array,
  },
  warrantyPeriod: Number,
  userInterface: {
    type: String,
    default: "-",
  },
  box: {
    type: String,
    default: "-",
  },
  variants: [
    {
      memory: {
        internalStorage: {
          type: String,
          default: "-",
        },
        ram: {
          type: String,
          default: "-",
        },
        expandableStorage: {
          type: String,
          default: "-",
        },
      },
      color: {
        type: String,
      },
    },
  ],
  bodyType: {
    type: String,
    default: "-",
  },
  review: {
    type: String,
    default: "-",
  },
  ourOpinion: {
    type: String,
    default: "-",
  },
});

const Mobile = mongoose.model("Mobile", mobileSchema);
module.exports = Mobile;
