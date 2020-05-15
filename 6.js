findNumInArray = (argStr = "") => argStr.split(" ").filter((elem)=> +elem)
findNumInArray = (argStr = "") => argStr.split(" ").filter((elem)=> ~(+elem))