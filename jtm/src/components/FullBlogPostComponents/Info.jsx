import React from 'react'

const Info = () => {
  const getDate = new Date();
  const date = getDate.getDate();
  const year = getDate.getFullYear();
  
  const getMonthName = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthIndex = getDate.getMonth(); // Corrected: index should be 0-11
    return monthNames[monthIndex];
  };

  const image = "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728613807/image_fx__23_1_ii50ap.png"
  return (
    <section className="w-full">
      <div className="w-10/12 mx-auto flex items-start justify-start gap-4 text-[#fcfcfc] ">
        <div>
          <img src={image} alt="" className="rounded-full w-20 bg-[#d9d9d9]" />
        </div>
        <div>
          <h3 className="font-inter font-semibold text-xl text-[#fcfcfc] dark:text-white">
            Bianca Noel
          </h3>
          <div className="flex text-inter gap-3">
            <p className="text-[#fcfcfc]">{date}</p>
            <p className="text-[#fcfcfc]">{getMonthName()}</p>
          </div>
          <p className="text-[#fcfcfc]">{year}</p>
        </div>
      </div>
    </section>
  )
}

export default Info

// import React from 'react';

// const Info = ({ author, publishedDate, authorImage }) => {
//   // Convert published date to readable format
//   const getFormattedDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = date.getDate();
//     const year = date.getFullYear();
//     const monthNames = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     const month = monthNames[date.getMonth()];
//     return `${day} ${month} ${year}`;
//   };

//   return (
//     <section className="w-full">
//       <div className="w-10/12 mx-auto flex items-start justify-start gap-4 text-[#fcfcfc] dark:text-[#fcfcfc]">
//         <div>
//           <img 
//             src={authorImage} 
//             alt={`${author}'s avatar`} 
//             className="rounded-full w-20 bg-[#d9d9d9]" 
//           />
//         </div>
//         <div>
//           <h3 className="font-inter font-semibold text-xl text-black dark:text-white">
//             {author}
//           </h3>
//           <div className="flex text-inter gap-3">
//             <p className="text-black dark:text-white">{getFormattedDate(publishedDate)}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Info;

