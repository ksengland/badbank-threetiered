mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/BankUsers",
  {
    useNewUrlParser: true,
  }
);
