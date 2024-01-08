export default function Logo({currentDate}) {
  const date = currentDate;


  return (
    <div className="banner">
        <h1> 📅 to-do list 🌷 </h1>
        <h4>Today is: {date}</h4>

    </div>
  );
}
