function Home() {
  return (
    <Card
      bgcolor="light"
      txtcolor="dark"
      header="LessBadBank"
      title="Welcome to the LessBadBank - the bank with slightly improved security"
      text="Click on 'Create Account' to get started."
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  );
}
