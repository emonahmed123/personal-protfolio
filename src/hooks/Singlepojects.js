import { useEffect, useState } from "react";

const useSingleProdut = (id) => {
  const [project, setProjects] = useState({});

//   useEffect(() => {
//     fetch('/Serevice.json/${id}')
//       .then((res) =>res.json())
//       .then((data) => {
//         setProjects(data);
//       });
//   }, [id]);
//   return [project, setProjects];
};

export default useSingleProdut;