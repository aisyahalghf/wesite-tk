const Classroom = (props) => {
  return (
    <div className=" text-center flex flex-col gap-5 font-ABEZE w-[400px] ">
      <img
        className=" w-[390px] h-[320px] object-cover "
        src={props.img}
        alt="classroom"
      />
      <h1 className=" text-4xl  ">
        {props.Classroom} <br /> ({props.age})
      </h1>
      <p>{props.text}</p>
    </div>
  );
};

export default Classroom;
