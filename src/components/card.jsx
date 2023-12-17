const CardUser = ( id , img , name ,password ) => {
  return (
    <div className=" flex justify-around w-full shadow-lg h-9 p-2 ">
      <p className=" text-[#1775ce] font-[ralway] font-semibold">ID</p>
      <p className=" text-[#1775ce] font-[ralway] font-semibold">Profile Img</p>
      <p className=" text-[#1775ce] font-[ralway] font-semibold">Name</p>
      <p className=" text-[#1775ce] font-[ralway] font-semibold">Course Name</p>
      <p className=" text-[#1775ce] font-[ralway] font-semibold">Passwrod</p>
    </div>
  );
};
export default CardUser;
