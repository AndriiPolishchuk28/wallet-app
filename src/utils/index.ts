export const generateRandomBalance = (): number => {
    const randomNumber = Math.random() * 1500;
    return parseFloat(randomNumber.toFixed(2));
  }

export const getDayIfThisWeek = (dateString: string): string | null => {
    const [day, month, year] = dateString.split('/').map(num => parseInt(num, 10));
    const date = new Date(year + 2000, month - 1, day); 
    const currentDate = new Date();
    const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay())); // початок тижня
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
  
    if (date >= startOfWeek && date <= endOfWeek) {
      const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
      return date.toLocaleDateString('en-EN', options);
    }
    return null; 
  }
  
  type seasons = "winter" | "spring" | "summer" | "autumn";

  const getSeason = (): seasons => {
      const month = new Date().getMonth();
  
      if (month === 11 || month === 0 || month === 1) {
          return 'winter';
      } else if (month === 2 || month === 3 || month === 4) {
          return 'spring';
      } else if (month === 5 || month === 6 || month === 7) {
          return 'summer';
      } else if (month === 8 || month === 9 || month === 10) {
          return 'autumn';
      } else {
          throw new Error("Invalid month");
      }
  };  

  const getDaysInSeason = (season: seasons, year: number): number => {
    let startDate: Date;
    const today = new Date();

    switch (season) {
        case "winter":
          startDate = new Date(year, 11, 1);
          if (today.getMonth() === 0 || today.getMonth() === 1) {
            startDate = new Date(year - 1, 11, 1); 
          }
            break;
        case "spring":
            startDate = new Date(year, 2, 1); 
            break;
        case "summer":
            startDate = new Date(year, 5, 1); 
            break;
        case "autumn":
            startDate = new Date(year, 8, 1);
            break;
    }

    const diffInMs = today.getTime() - startDate.getTime();
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
};


const getPoints = (days: number): number => {
  let firstDay = 2;
  let secondDay = 3;
  let currentDay:number = 0;
  let totalPoints: number = firstDay + secondDay;

  for(let n = 3; n <= days; n++) {
      currentDay = firstDay + 0.6 * secondDay;
      totalPoints += currentDay;
      firstDay = secondDay;
      secondDay = currentDay;
  }
  return Math.round(totalPoints);
}  

export const getPointsResult = () => {
  const season = getSeason();
  const year = new Date().getFullYear();
  const days = getDaysInSeason(season, year);
  console.log(days);
  return getPoints(days);
};