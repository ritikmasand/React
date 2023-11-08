function BtnClicked(props) {
  const BtnClicked = () => {
    alert("Btn Clicked");
    console.log(props.array);
  };
  return (
    <div>
      <button onClick={BtnClicked}>Click me</button>
    </div>
  );
}
export default BtnClicked;
