let maxHistory = [
  {date:"March 10 2020", main:"5 6 27 37 38 46 48", bonus:"9"},
  {date:"March 6 2020", main:"2 9 10 35 41 42 47", bonus:"40"},
  {date:"March 3 2020", main:"10 14 15 25 27 39 48", bonus:"28"},
  {date:"February 28 2020", main:"21 27 30 32 33 36 46", bonus:"38"},
  {date:"February 25 2020", main:"15 32 36 40 41 43 48", bonus:"10"},
  {date:"February 21 2020", main:"4 7 14 37 48 49 50", bonus:"28"},
  {date:"February 18 2020", main:"3 6 19 23 33 40 45", bonus:"48"},
  {date:"February 14 2020", main:"14 17 20 34 38 45 49", bonus:"5"},
  {date:"February 11 2020", main:"14 15 19 22 31 36 39", bonus:"23"},
  {date:"February 7 2020", main:"21 24 26 31 36 48 49", bonus:"39"},
  {date:"February 4 2020", main:"3 12 18 25 43 46 50", bonus:"33"},
  {date:"January 31 2020", main:"2 27 30 39 44 45 49", bonus:"17"},
  {date:"January 28 2020", main:"4 10 12 27 30 44 46", bonus:"7"},
  {date:"January 24 2020", main:"2 11 14 21 23 34 36", bonus:"5"},
  {date:"January 21 2020", main:"7 11 16 21 31 36 44", bonus:"46"},
  {date:"January 17 2020", main:"5 6 36 39 40 46 48", bonus:"34"},
  {date:"January 14 2020", main:"5 16 19 23 30 37 48", bonus:"44"},
  {date:"January 10 2020", main:"10 13 14 24 28 47 48", bonus:"12"},
  {date:"January 7 2020", main:"3 8 12 14 17 18 29", bonus:"11"},
  {date:"January 3 2020", main:"8 18 20 24 31 37 39", bonus:"34"},
  {date:"December 31 2019", main:"3 4 11 19 30 39 40", bonus:"25"},
  {date:"December 27 2019", main:"13 27 34 36 38 45 50", bonus:"18"},
  {date:"December 24 2019", main:"1 6 12 13 19 23 38", bonus:"37"},
  {date:"December 20 2019", main:"14 23 28 29 30 33 48", bonus:"9"},
  {date:"December 17 2019", main:"19 20 23 29 35 40 47", bonus:"31"},
  {date:"December 13 2019", main:"2 12 14 15 26 34 39", bonus:"48"},
  {date:"December 10 2019", main:"7 11 19 30 42 43 50", bonus:"44"},
  {date:"December 6 2019", main:"9 11 17 19 35 36 43", bonus:"28"},
  {date:"December 3 2019", main:"2 10 20 30 32 35 50", bonus:"21"},
  {date:"November 29 2019", main:"3 8 14 15 24 33 48", bonus:"4"},
  {date:"November 26 2019", main:"13 14 18 22 42 44 47", bonus:"12"},
  {date:"November 22 2019", main:"5 9 23 29 30 31 37", bonus:"34"},
  {date:"November 19 2019", main:"5 13 23 25 27 32 44", bonus:"3"},
  {date:"November 15 2019", main:"15 16 33 36 38 43 49", bonus:"4"},
  {date:"November 12 2019", main:"1 14 16 22 32 39 45", bonus:"31"},
  {date:"November 8 2019", main:"3 5 10 18 26 33 46", bonus:"49"},
  {date:"November 5 2019", main:"5 7 15 18 35 37 45", bonus:"47"},
  {date:"November 1 2019", main:"10 20 24 25 32 39 46", bonus:"15"},
  {date:"October 29 2019", main:"10 17 18 22 23 25 34", bonus:"37"},
  {date:"October 25 2019", main:"6 11 16 18 23 26 40", bonus:"45"},
  {date:"October 22 2019", main:"1 4 6 9 25 31 43", bonus:"10"},
  {date:"October 18 2019", main:"3 21 29 37 40 43 44", bonus:"38"},
  {date:"October 15 2019", main:"17 18 22 27 29 31 34", bonus:"8"},
  {date:"October 11 2019", main:"1 3 11 13 19 22 46", bonus:"31"},
  {date:"October 8 2019", main:"18 24 31 38 44 46 50", bonus:"40"},
  {date:"October 4 2019", main:"20 31 35 36 39 42 44", bonus:"23"},
  {date:"October 1 2019", main:"1 15 19 31 40 41 43", bonus:"49"},
  {date:"September 27 2019", main:"3 9 25 26 28 34 38", bonus:"36"},
  {date:"September 24 2019", main:"3 22 26 32 38 42 43", bonus:"8"},
  {date:"September 20 2019", main:"9 15 26 36 39 41 47", bonus:"37"},
  {date:"September 17 2019", main:"2 4 17 39 40 43 46", bonus:"44"},
  {date:"September 13 2019", main:"4 16 21 32 44 45 50", bonus:"26"},
  {date:"September 10 2019", main:"1 15 16 20 27 38 50", bonus:"9"},
  {date:"September 6 2019", main:"4 5 24 25 43 44 50", bonus:"41"},
  {date:"September 3 2019", main:"6 8 11 13 28 42 48", bonus:"27"},
  {date:"August 30 2019", main:"5 9 33 36 39 41 44", bonus:"27"},
  {date:"August 27 2019", main:"5 7 19 28 32 35 44", bonus:"46"},
  {date:"August 23 2019", main:"5 6 8 15 22 46 47", bonus:"31"},
  {date:"August 20 2019", main:"9 17 23 37 44 46 48", bonus:"4"},
  {date:"August 16 2019", main:"22 24 25 26 29 32 46", bonus:"20"},
  {date:"August 13 2019", main:"1 5 38 39 42 47 49", bonus:"15"},
  {date:"August 9 2019", main:"10 25 31 34 36 39 45", bonus:"9"},
  {date:"August 6 2019", main:"19 22 28 30 36 38 39", bonus:"25"},
  {date:"August 2 2019", main:"11 20 23 24 26 41 44", bonus:"38"},
  {date:"July 30 2019", main:"4 6 10 15 24 40 43", bonus:"3"},
  {date:"July 26 2019", main:"11 15 17 20 24 25 50", bonus:"30"},
  {date:"July 23 2019", main:"4 8 11 16 28 29 44", bonus:"43"},
  {date:"July 19 2019", main:"1 15 21 29 30 31 33", bonus:"5"},
  {date:"July 16 2019", main:"11 14 17 21 23 26 36", bonus:"19"},
  {date:"July 12 2019", main:"3 13 19 25 28 30 37", bonus:"1"},
  {date:"July 9 2019", main:"10 13 31 32 36 40 41", bonus:"17"},
  {date:"July 5 2019", main:"1 4 8 28 32 36 43", bonus:"40"},
  {date:"July 2 2019", main:"6 14 26 31 34 36 45", bonus:"25"},
  {date:"June 28 2019", main:"7 11 36 37 38 43 46", bonus:"26"},
  {date:"June 25 2019", main:"2 14 15 23 27 44 45", bonus:"8"},
  {date:"June 21 2019", main:"11 16 17 20 42 44 50", bonus:"31"},
  {date:"June 18 2019", main:"1 6 13 15 38 42 49", bonus:"48"},
  {date:"June 14 2019", main:"4 11 20 22 37 44 49", bonus:"13"},
  {date:"June 11 2019", main:"18 23 28 32 34 44 50", bonus:"29"},
  {date:"June 7 2019", main:"4 8 13 23 25 33 39", bonus:"17"},
  {date:"June 4 2019", main:"7 19 22 28 34 41 42", bonus:"12"},
  {date:"May 31 2019", main:"6 29 34 39 42 47 50", bonus:"22"},
  {date:"May 28 2019", main:"4 9 10 26 27 29 37", bonus:"14"},
  {date:"May 24 2019", main:"9 11 15 19 20 35 41", bonus:"28"},
  {date:"May 21 2019", main:"2 3 8 18 31 39 50", bonus:"33"},
  {date:"May 17 2019", main:"4 21 23 39 40 42 50", bonus:"17"},
  {date:"May 14 2019", main:"9 24 27 33 40 44 48", bonus:"41"},
  {date:"May 10 2019", main:"16 17 31 34 36 39 41", bonus:"10"},
  {date:"May 3 2019", main:"2 3 5 12 21 22 37", bonus:"19"},
  {date:"April 26 2019", main:"9 17 21 23 36 41 48", bonus:"12"},
  {date:"April 19 2019", main:"2 16 21 33 39 42 47", bonus:"1"},
  {date:"April 12 2019", main:"2 20 21 30 31 39 45", bonus:"18"},
  {date:"April 5 2019", main:"1 2 16 21 23 25 28", bonus:"48"},
  {date:"March 29 2019", main:"10 12 19 22 25 32 42", bonus:"39"},
  {date:"March 22 2019", main:"1 3 20 21 27 28 44", bonus:"43"},
  {date:"March 15 2019", main:"6 11 25 31 36 41 49", bonus:"47"},
  {date:"March 8 2019", main:"2 9 16 17 21 22 32", bonus:"38"},
  {date:"March 1 2019", main:"2 23 24 29 40 48 49", bonus:"18"},
  {date:"February 22 2019", main:"6 31 33 34 43 44 46", bonus:"22"},
  {date:"February 15 2019", main:"1 2 32 37 38 39 45", bonus:"16"},
  {date:"February 8 2019", main:"18 23 31 32 36 38 43", bonus:"27"},
  {date:"February 1 2019", main:"2 6 13 19 21 32 40", bonus:"12"},
  {date:"January 25 2019", main:"6 12 20 24 40 42 47", bonus:"44"},
  {date:"January 18 2019", main:"3 19 22 30 32 37 40", bonus:"20"},
  {date:"January 11 2019", main:"8 15 21 28 29 30 39", bonus:"23"},
  {date:"January 4 2019", main:"7 22 25 26 35 41 45", bonus:"3"},
  {date:"December 28 2018", main:"5 13 14 16 17 29 49", bonus:"18"},
  {date:"December 21 2018", main:"7 21 23 25 31 34 45", bonus:"37"},
  {date:"December 14 2018", main:"6 7 11 21 23 27 41", bonus:"49"},
  {date:"December 7 2018", main:"2 9 15 23 26 30 41", bonus:"13"},
  {date:"November 30 2018", main:"5 8 15 20 25 26 47", bonus:"22"},
  {date:"November 23 2018", main:"1 7 13 14 22 42 48", bonus:"47"},
  {date:"November 16 2018", main:"11 17 24 34 41 42 48", bonus:"21"},
  {date:"November 9 2018", main:"2 12 31 34 39 48 49", bonus:"1"},
  {date:"November 2 2018", main:"9 10 16 23 24 39 49", bonus:"7"},
  {date:"October 26 2018", main:"2 3 4 8 9 20 30", bonus:"45"},
  {date:"October 19 2018", main:"10 15 16 17 19 27 38", bonus:"9"},
  {date:"October 12 2018", main:"18 31 38 45 46 47 48", bonus:"16"},
  {date:"October 5 2018", main:"8 9 12 20 22 27 30", bonus:"28"},
  {date:"September 28 2018", main:"25 28 31 36 42 44 49", bonus:"37"},
  {date:"September 21 2018", main:"3 9 15 16 19 45 48", bonus:"42"},
  {date:"September 14 2018", main:"1 3 5 10 16 27 43", bonus:"14"},
  {date:"September 7 2018", main:"3 12 21 34 37 38 41", bonus:"22"},
  {date:"August 31 2018", main:"2 4 18 19 20 39 44", bonus:"11"},
  {date:"August 24 2018", main:"3 5 7 11 13 20 29", bonus:"30"},
  {date:"August 17 2018", main:"12 17 22 27 28 29 35", bonus:"43"},
  {date:"August 10 2018", main:"2 9 18 33 36 40 49", bonus:"38"},
  {date:"August 3 2018", main:"9 11 23 33 35 36 42", bonus:"6"},
  {date:"July 27 2018", main:"8 11 14 17 26 30 36", bonus:"48"},
  {date:"July 20 2018", main:"6 8 12 19 20 25 49", bonus:"18"},
  {date:"July 13 2018", main:"1 4 5 22 25 32 34", bonus:"27"},
  {date:"July 6 2018", main:"1 11 20 32 41 42 44", bonus:"47"},
  {date:"June 29 2018", main:"3 5 17 23 28 43 46", bonus:"29"},
  {date:"June 22 2018", main:"3 10 16 28 31 38 47", bonus:"20"},
  {date:"June 15 2018", main:"18 23 28 37 44 45 47", bonus:"9"},
  {date:"June 8 2018", main:"12 25 27 29 34 44 45", bonus:"7"},
  {date:"June 1 2018", main:"2 11 17 18 22 25 39", bonus:"3"},
  {date:"May 25 2018", main:"7 10 13 19 24 31 41", bonus:"1"},
  {date:"May 18 2018", main:"4 13 23 30 31 37 43", bonus:"32"},
  {date:"May 11 2018", main:"11 22 28 33 39 43 47", bonus:"23"},
  {date:"May 4 2018", main:"1 11 15 16 20 29 39", bonus:"32"},
  {date:"April 27 2018", main:"8 9 11 17 37 39 41", bonus:"19"},
  {date:"April 20 2018", main:"6 14 16 22 30 42 45", bonus:"35"},
  {date:"April 13 2018", main:"1 8 9 22 29 30 32", bonus:"17"},
  {date:"April 6 2018", main:"7 18 29 30 41 45 46", bonus:"40"},
  {date:"March 30 2018", main:"1 12 18 19 21 24 41", bonus:"15"},
  {date:"March 23 2018", main:"7 12 15 23 35 43 49", bonus:"19"},
  {date:"March 16 2018", main:"13 24 29 31 35 36 42", bonus:"37"},
  {date:"March 9 2018", main:"13 18 20 26 32 35 47", bonus:"12"},
  {date:"March 2 2018", main:"7 25 26 28 32 36 37", bonus:"2"},
  {date:"February 23 2018", main:"13 17 24 32 33 44 45", bonus:"48"},
  {date:"February 16 2018", main:"5 14 22 23 35 40 49", bonus:"43"},
  {date:"February 9 2018", main:"6 19 24 25 36 37 39", bonus:"17"},
  {date:"February 2 2018", main:"3 8 9 24 28 31 44", bonus:"32"},
  {date:"January 26 2018", main:"7 8 13 19 23 32 40", bonus:"9"},
  {date:"January 19 2018", main:"9 18 25 30 39 40 43", bonus:"5"},
  {date:"January 12 2018", main:"1 8 16 19 26 34 41", bonus:"10"},
  {date:"January 5 2018", main:"1 3 13 15 28 36 49", bonus:"14"},
  {date:"December 29 2017", main:"22 23 26 35 37 39 47", bonus:"14"},
  {date:"December 22 2017", main:"13 16 19 21 24 26 30", bonus:"36"},
  {date:"December 15 2017", main:"8 14 17 27 28 30 48", bonus:"37"},
  {date:"December 8 2017", main:"1 17 31 33 39 46 49", bonus:"42"},
  {date:"December 1 2017", main:"26 28 33 38 42 43 47", bonus:"16"},
  {date:"November 24 2017", main:"5 11 20 22 35 38 46", bonus:"45"},
  {date:"November 17 2017", main:"3 15 22 23 33 47 49", bonus:"6"},
  {date:"November 10 2017", main:"5 12 18 26 29 31 37", bonus:"40"},
  {date:"November 3 2017", main:"16 17 18 20 40 42 43", bonus:"15"},
  {date:"October 27 2017", main:"1 14 15 16 24 39 49", bonus:"5"},
  {date:"October 20 2017", main:"1 4 12 27 35 38 46", bonus:"8"},
  {date:"October 13 2017", main:"8 14 16 17 18 34 41", bonus:"43"},
  {date:"October 6 2017", main:"10 17 25 27 29 34 38", bonus:"48"},
  {date:"September 29 2017", main:"1 6 14 23 38 40 47", bonus:"25"},
  {date:"September 22 2017", main:"2 10 37 38 39 43 47", bonus:"28"},
  {date:"September 15 2017", main:"15 20 24 30 39 44 46", bonus:"22"},
  {date:"September 8 2017", main:"1 2 15 16 22 29 41", bonus:"27"},
  {date:"September 1 2017", main:"1 7 18 28 31 39 48", bonus:"35"},
  {date:"August 25 2017", main:"18 19 23 34 39 43 46", bonus:"1"},
  {date:"August 18 2017", main:"2 9 13 16 25 26 45", bonus:"19"},
  {date:"August 11 2017", main:"13 14 19 26 27 36 37", bonus:"18"},
  {date:"August 4 2017", main:"1 4 11 17 27 36 37", bonus:"47"},
  {date:"July 28 2017", main:"9 12 16 24 33 45 47", bonus:"14"},
  {date:"July 21 2017", main:"2 11 12 25 33 39 44", bonus:"8"},
  {date:"July 14 2017", main:"2 4 11 17 26 41 42", bonus:"44"},
  {date:"July 7 2017", main:"4 8 13 16 26 33 38", bonus:"10"},
  {date:"June 30 2017", main:"7 24 26 36 37 43 44", bonus:"3"},
  {date:"June 23 2017", main:"2 3 6 22 24 42 46", bonus:"27"},
  {date:"June 16 2017", main:"1 5 20 33 34 41 42", bonus:"15"},
  {date:"June 9 2017", main:"7 11 20 21 22 37 47", bonus:"38"},
  {date:"June 2 2017", main:"11 12 25 28 33 41 43", bonus:"36"},
  {date:"May 26 2017", main:"14 16 18 21 38 44 49", bonus:"15"},
  {date:"May 19 2017", main:"8 11 18 25 34 35 38", bonus:"44"},
  {date:"May 12 2017", main:"11 25 26 28 38 44 45", bonus:"20"},
  {date:"May 5 2017", main:"11 14 20 22 26 35 43", bonus:"33"},
  {date:"April 28 2017", main:"10 14 22 36 38 44 45", bonus:"11"},
  {date:"April 21 2017", main:"3 4 13 16 35 47 49", bonus:"37"},
  {date:"April 14 2017", main:"23 25 29 30 42 44 45", bonus:"20"},
  {date:"April 7 2017", main:"8 12 14 34 37 44 48", bonus:"45"},
  {date:"March 31 2017", main:"1 2 12 15 22 25 41", bonus:"34"},
  {date:"March 24 2017", main:"16 19 21 32 37 39 45", bonus:"26"},
  {date:"March 17 2017", main:"2 5 6 7 8 33 45", bonus:"15"},
  {date:"March 10 2017", main:"1 11 15 20 36 41 47", bonus:"33"},
  {date:"March 3 2017", main:"3 7 20 25 29 31 44", bonus:"27"},
  {date:"February 24 2017", main:"1 17 19 23 28 29 47", bonus:"10"},
  {date:"February 17 2017", main:"5 9 14 24 33 37 46", bonus:"38"},
  {date:"February 10 2017", main:"11 16 19 22 24 38 41", bonus:"48"},
  {date:"February 3 2017", main:"8 19 24 28 34 42 48", bonus:"17"},
  {date:"January 27 2017", main:"1 3 8 22 29 38 47", bonus:"11"},
  {date:"January 20 2017", main:"4 10 21 28 29 37 45", bonus:"20"},
  {date:"January 13 2017", main:"2 8 24 30 31 38 40", bonus:"42"},
  {date:"January 6 2017", main:"10 13 18 19 38 47 48", bonus:"42"},
  {date:"December 30 2016", main:"5 10 14 19 31 33 47", bonus:"27"},
  {date:"December 23 2016", main:"1 5 11 26 28 30 41", bonus:"49"},
  {date:"December 16 2016", main:"2 9 27 32 38 39 43", bonus:"45"},
  {date:"December 9 2016", main:"11 17 24 26 34 35 39", bonus:"16"},
  {date:"December 2 2016", main:"5 8 20 21 29 40 47", bonus:"7"},
  {date:"November 25 2016", main:"2 11 20 22 31 35 47", bonus:"39"},
  {date:"November 18 2016", main:"7 10 21 24 38 40 49", bonus:"3"},
  {date:"November 11 2016", main:"8 14 18 20 24 39 46", bonus:"23"},
  {date:"November 4 2016", main:"4 23 29 36 39 44 46", bonus:"24"},
  {date:"October 28 2016", main:"3 5 19 29 33 34 44", bonus:"41"},
  {date:"October 21 2016", main:"33 34 36 42 44 45 47", bonus:"14"},
  {date:"October 14 2016", main:"14 18 22 25 36 39 44", bonus:"34"},
  {date:"October 7 2016", main:"8 9 12 24 29 36 37", bonus:"17"},
  {date:"September 30 2016", main:"4 12 17 21 32 38 42", bonus:"46"},
  {date:"September 23 2016", main:"3 13 24 36 39 44 45", bonus:"19"},
  {date:"September 16 2016", main:"7 12 14 15 27 34 44", bonus:"6"},
  {date:"September 9 2016", main:"4 10 11 27 29 32 41", bonus:"42"},
  {date:"September 2 2016", main:"1 12 15 22 25 45 48", bonus:"16"},
  {date:"August 26 2016", main:"3 10 17 19 26 27 42", bonus:"46"},
  {date:"August 19 2016", main:"19 22 25 32 37 45 47", bonus:"40"},
  {date:"August 12 2016", main:"5 7 15 18 19 27 28", bonus:"25"},
  {date:"August 5 2016", main:"4 6 10 20 40 46 47", bonus:"39"},
  {date:"July 29 2016", main:"11 15 25 26 39 47 49", bonus:"30"},
  {date:"July 22 2016", main:"9 26 28 32 37 40 45", bonus:"46"},
  {date:"July 15 2016", main:"19 30 31 36 40 44 49", bonus:"6"},
  {date:"July 8 2016", main:"1 8 16 25 30 42 48", bonus:"28"},
  {date:"July 1 2016", main:"10 12 14 28 36 39 45", bonus:"26"},
  {date:"June 24 2016", main:"2 17 22 24 26 42 48", bonus:"6"},
  {date:"June 17 2016", main:"1 16 20 29 33 44 46", bonus:"15"},
  {date:"June 10 2016", main:"5 11 15 26 27 33 39", bonus:"46"},
  {date:"June 3 2016", main:"12 21 28 37 40 43 47", bonus:"11"},
  {date:"May 27 2016", main:"1 14 16 20 26 32 34", bonus:"18"},
  {date:"May 20 2016", main:"16 17 19 22 31 47 49", bonus:"1"},
  {date:"May 13 2016", main:"3 6 8 17 21 28 34", bonus:"2"},
  {date:"May 6 2016", main:"1 8 10 24 26 37 45", bonus:"47"},
  {date:"April 29 2016", main:"11 21 22 24 26 36 43", bonus:"10"},
  {date:"April 22 2016", main:"13 16 20 35 37 43 49", bonus:"6"},
  {date:"April 15 2016", main:"1 9 17 19 25 27 38", bonus:"44"},
  {date:"April 8 2016", main:"9 12 13 14 28 39 41", bonus:"38"},
  {date:"April 1 2016", main:"5 6 27 28 31 41 45", bonus:"12"},
  {date:"March 25 2016", main:"1 6 15 32 42 45 46", bonus:"44"},
  {date:"March 18 2016", main:"6 8 15 24 26 39 44", bonus:"40"},
  {date:"March 11 2016", main:"9 17 27 30 31 34 42", bonus:"21"},
  {date:"March 4 2016", main:"4 14 24 41 42 44 48", bonus:"26"},
  {date:"February 26 2016", main:"6 9 22 23 36 38 47", bonus:"12"},
  {date:"February 19 2016", main:"2 11 20 22 33 40 43", bonus:"4"},
  {date:"February 12 2016", main:"19 20 26 31 34 39 48", bonus:"18"},
  {date:"February 5 2016", main:"6 7 8 9 17 23 30", bonus:"18"},
  {date:"January 29 2016", main:"5 11 14 17 28 41 47", bonus:"46"},
  {date:"January 22 2016", main:"20 21 22 34 42 43 45", bonus:"1"},
  {date:"January 15 2016", main:"7 26 27 31 32 33 42", bonus:"45"},
  {date:"January 8 2016", main:"13 15 21 24 25 36 48", bonus:"10"},
  {date:"January 1 2016", main:"6 10 13 14 25 41 46", bonus:"8"},
  {date:"December 25 2015", main:"5 8 9 12 22 39 45", bonus:"38"},
  {date:"December 18 2015", main:"6 20 28 29 30 31 46", bonus:"45"},
  {date:"December 11 2015", main:"7 12 28 34 45 46 48", bonus:"49"},
  {date:"December 4 2015", main:"8 15 24 25 27 36 43", bonus:"32"},
  {date:"November 27 2015", main:"4 8 9 20 23 45 46", bonus:"31"},
  {date:"November 20 2015", main:"12 21 28 34 36 45 48", bonus:"26"},
  {date:"November 13 2015", main:"7 11 19 38 40 41 42", bonus:"49"},
  {date:"November 6 2015", main:"1 10 12 20 29 35 47", bonus:"4"},
  {date:"October 30 2015", main:"2 11 19 38 43 45 49", bonus:"9"},
  {date:"October 23 2015", main:"2 7 12 28 29 38 48", bonus:"27"},
  {date:"October 16 2015", main:"9 14 19 21 31 32 40", bonus:"16"},
  {date:"October 9 2015", main:"8 11 14 23 26 42 47", bonus:"1"},
  {date:"October 2 2015", main:"10 12 24 26 34 43 47", bonus:"38"},
  {date:"September 25 2015", main:"1 7 15 18 21 30 45", bonus:"22"},
  {date:"September 18 2015", main:"13 16 17 21 35 40 46", bonus:"18"},
  {date:"September 11 2015", main:"21 22 27 30 39 42 44", bonus:"8"},
  {date:"September 4 2015", main:"7 8 15 19 36 37 41", bonus:"43"},
  {date:"August 28 2015", main:"2 4 5 17 29 39 41", bonus:"48"},
  {date:"August 21 2015", main:"3 13 15 22 33 41 49", bonus:"11"},
  {date:"August 14 2015", main:"1 15 17 25 34 40 41", bonus:"38"},
  {date:"August 7 2015", main:"5 13 20 37 39 40 41", bonus:"28"},
  {date:"July 31 2015", main:"2 5 27 32 35 42 46", bonus:"48"},
  {date:"July 24 2015", main:"2 4 11 19 28 29 38", bonus:"42"},
  {date:"July 17 2015", main:"23 24 29 36 42 43 49", bonus:"38"},
  {date:"July 10 2015", main:"12 14 23 25 31 38 40", bonus:"36"},
  {date:"July 3 2015", main:"1 6 30 40 46 47 49", bonus:"37"},
  {date:"June 26 2015", main:"2 4 16 23 30 32 46", bonus:"38"},
  {date:"June 19 2015", main:"7 14 15 16 21 30 41", bonus:"17"},
  {date:"June 12 2015", main:"4 7 11 19 34 38 48", bonus:"45"},
  {date:"June 5 2015", main:"2 10 13 16 30 33 48", bonus:"44"},
  {date:"May 29 2015", main:"1 30 38 39 44 45 47", bonus:"43"},
  {date:"May 22 2015", main:"1 4 21 24 29 30 46", bonus:"25"},
  {date:"May 15 2015", main:"16 23 24 25 40 46 47", bonus:"17"},
  {date:"May 8 2015", main:"1 7 17 27 32 44 48", bonus:"18"},
  {date:"May 1 2015", main:"6 18 20 37 40 44 46", bonus:"49"},
  {date:"April 24 2015", main:"3 37 38 40 42 43 46", bonus:"12"},
  {date:"April 17 2015", main:"7 11 14 15 19 30 41", bonus:"22"},
  {date:"April 10 2015", main:"7 8 16 18 24 25 46", bonus:"37"},
  {date:"April 3 2015", main:"10 11 23 28 32 34 41", bonus:"29"},
  {date:"March 27 2015", main:"3 7 15 23 29 31 45", bonus:"46"},
  {date:"March 20 2015", main:"7 10 16 35 36 42 45", bonus:"24"},
  {date:"March 13 2015", main:"2 8 10 15 17 20 24", bonus:"14"},
  {date:"March 6 2015", main:"2 8 9 10 24 26 41", bonus:"37"},
  {date:"February 27 2015", main:"4 12 16 27 37 39 44", bonus:"32"},
  {date:"February 20 2015", main:"26 34 38 41 46 48 49", bonus:"10"},
  {date:"February 13 2015", main:"6 9 18 22 25 32 44", bonus:"46"},
  {date:"February 6 2015", main:"1 5 7 13 14 33 46", bonus:"47"},
  {date:"January 30 2015", main:"10 15 21 28 32 36 37", bonus:"9"},
  {date:"January 23 2015", main:"1 14 15 18 26 42 48", bonus:"39"},
  {date:"January 16 2015", main:"6 29 30 31 36 42 45", bonus:"32"},
  {date:"January 9 2015", main:"3 7 12 18 31 33 35", bonus:"26"},
  {date:"January 2 2015", main:"8 9 14 19 28 31 46", bonus:"48"},
  {date:"December 26 2014", main:"15 20 29 39 40 43 46", bonus:"12"},
  {date:"December 19 2014", main:"3 6 13 17 22 25 43", bonus:"47"},
  {date:"December 12 2014", main:"2 14 30 34 38 47 48", bonus:"16"},
  {date:"December 5 2014", main:"10 14 15 16 42 45 48", bonus:"49"},
  {date:"November 28 2014", main:"3 4 7 12 17 26 34", bonus:"1"},
  {date:"November 21 2014", main:"6 18 19 26 37 39 47", bonus:"21"},
  {date:"November 14 2014", main:"2 5 7 13 15 30 38", bonus:"27"},
  {date:"November 7 2014", main:"1 3 6 8 14 20 30", bonus:"28"},
  {date:"October 31 2014", main:"3 12 25 30 42 44 45", bonus:"26"},
  {date:"October 24 2014", main:"8 27 30 32 34 35 42", bonus:"17"},
  {date:"October 17 2014", main:"18 19 32 36 38 40 43", bonus:"1"},
  {date:"October 10 2014", main:"5 13 18 28 31 38 44", bonus:"46"},
  {date:"October 3 2014", main:"7 15 24 25 27 43 47", bonus:"22"},
  {date:"September 26 2014", main:"2 3 5 18 37 38 46", bonus:"33"},
  {date:"September 19 2014", main:"4 7 8 10 16 20 36", bonus:"27"},
  {date:"September 12 2014", main:"5 6 8 13 24 37 46", bonus:"30"},
  {date:"September 5 2014", main:"3 8 11 20 28 36 38", bonus:"26"},
  {date:"August 29 2014", main:"1 23 26 33 35 38 42", bonus:"18"},
  {date:"August 22 2014", main:"13 16 22 26 35 36 39", bonus:"44"},
  {date:"August 15 2014", main:"9 16 17 27 32 38 47", bonus:"37"},
  {date:"August 8 2014", main:"6 9 16 19 20 24 30", bonus:"31"},
  {date:"August 1 2014", main:"1 2 5 10 11 25 34", bonus:"36"},
  {date:"July 25 2014", main:"7 9 24 30 35 42 43", bonus:"36"},
  {date:"July 18 2014", main:"1 3 16 33 34 40 42", bonus:"2"},
  {date:"July 11 2014", main:"1 6 10 16 18 21 31", bonus:"5"},
  {date:"July 4 2014", main:"5 10 11 20 26 38 46", bonus:"44"},
  {date:"June 27 2014", main:"4 6 7 16 18 40 46", bonus:"34"},
  {date:"June 20 2014", main:"12 17 32 36 43 44 49", bonus:"4"},
  {date:"June 13 2014", main:"12 16 24 29 36 40 47", bonus:"44"},
  {date:"June 6 2014", main:"3 5 17 30 36 47 49", bonus:"31"},
  {date:"May 30 2014", main:"2 5 10 11 23 25 31", bonus:"46"},
  {date:"May 23 2014", main:"3 11 16 24 31 39 43", bonus:"2"},
  {date:"May 16 2014", main:"12 13 16 30 32 35 37", bonus:"7"},
  {date:"May 9 2014", main:"5 7 29 35 39 41 49", bonus:"14"},
  {date:"May 2 2014", main:"6 15 18 19 25 44 46", bonus:"28"},
  {date:"April 25 2014", main:"3 9 24 25 28 36 40", bonus:"48"},
  {date:"April 18 2014", main:"9 16 24 30 39 40 45", bonus:"14"},
  {date:"April 11 2014", main:"1 3 14 33 35 39 45", bonus:"28"},
  {date:"April 4 2014", main:"19 30 33 34 36 41 48", bonus:"11"},
  {date:"March 28 2014", main:"8 15 16 21 31 37 39", bonus:"20"},
  {date:"March 21 2014", main:"1 2 4 21 23 35 40", bonus:"5"},
  {date:"March 14 2014", main:"3 4 5 7 31 33 40", bonus:"49"},
  {date:"March 7 2014", main:"1 6 7 16 22 31 33", bonus:"25"},
  {date:"February 28 2014", main:"4 7 20 22 26 28 29", bonus:"47"},
  {date:"February 21 2014", main:"1 10 16 23 29 35 39", bonus:"46"},
  {date:"February 14 2014", main:"6 8 11 16 17 19 24", bonus:"29"},
  {date:"February 7 2014", main:"13 19 37 38 40 43 48", bonus:"46"},
  {date:"January 31 2014", main:"6 10 16 27 38 40 45", bonus:"39"},
  {date:"January 24 2014", main:"7 10 15 23 30 36 44", bonus:"45"},
  {date:"January 17 2014", main:"4 9 18 32 35 38 40", bonus:"12"},
  {date:"January 10 2014", main:"12 28 31 38 40 41 45", bonus:"15"},
  {date:"January 3 2014", main:"7 16 31 35 39 44 48", bonus:"42"},
  {date:"December 27 2013", main:"1 6 9 11 17 37 39", bonus:"32"},
  {date:"December 20 2013", main:"2 13 18 24 27 37 43", bonus:"14"},
  {date:"December 13 2013", main:"6 16 24 32 36 45 47", bonus:"25"},
  {date:"December 6 2013", main:"3 4 11 18 37 42 44", bonus:"47"},
  {date:"November 29 2013", main:"3 6 19 31 34 42 45", bonus:"30"},
  {date:"November 22 2013", main:"2 24 35 38 39 41 48", bonus:"20"},
  {date:"November 15 2013", main:"1 3 10 15 25 28 31", bonus:"7"},
  {date:"November 8 2013", main:"7 8 10 15 24 26 41", bonus:"12"},
  {date:"November 1 2013", main:"11 12 16 22 30 32 49", bonus:"35"},
  {date:"October 25 2013", main:"13 16 24 29 33 40 49", bonus:"28"},
  {date:"October 18 2013", main:"10 26 28 33 34 35 40", bonus:"12"},
  {date:"October 11 2013", main:"7 8 9 16 21 28 48", bonus:"29"},
  {date:"October 4 2013", main:"12 16 19 20 28 34 42", bonus:"9"},
  {date:"September 27 2013", main:"10 11 18 24 26 42 47", bonus:"45"},
  {date:"September 20 2013", main:"2 14 15 24 40 43 44", bonus:"45"},
  {date:"September 13 2013", main:"2 6 12 15 16 22 49", bonus:"46"},
  {date:"September 6 2013", main:"1 7 23 36 37 39 41", bonus:"33"},
  {date:"August 30 2013", main:"6 19 20 25 31 35 36", bonus:"45"},
  {date:"August 23 2013", main:"5 6 10 17 22 36 48", bonus:"3"},
  {date:"August 16 2013", main:"2 6 20 22 30 34 49", bonus:"45"},
  {date:"August 9 2013", main:"6 15 19 26 43 44 49", bonus:"30"},
  {date:"August 2 2013", main:"2 9 23 29 30 34 43", bonus:"40"},
  {date:"July 26 2013", main:"5 9 12 18 24 35 42", bonus:"17"},
  {date:"July 19 2013", main:"3 17 19 20 34 35 43", bonus:"4"},
  {date:"July 12 2013", main:"14 16 17 36 45 46 48", bonus:"7"},
  {date:"July 5 2013", main:"5 12 15 39 44 46 49", bonus:"18"},
  {date:"June 28 2013", main:"2 7 15 38 43 44 47", bonus:"1"},
  {date:"June 21 2013", main:"2 9 12 13 27 28 36", bonus:"20"},
  {date:"June 14 2013", main:"2 12 15 18 21 22 25", bonus:"5"},
  {date:"June 7 2013", main:"5 19 24 34 35 38 43", bonus:"8"},
  {date:"May 31 2013", main:"5 7 10 15 22 45 47", bonus:"23"},
  {date:"May 24 2013", main:"9 19 21 24 39 43 48", bonus:"6"},
  {date:"May 17 2013", main:"8 18 21 27 33 46 49", bonus:"26"},
  {date:"May 10 2013", main:"3 10 19 21 27 35 36", bonus:"49"},
  {date:"May 3 2013", main:"4 6 21 26 30 34 35", bonus:"39"},
  {date:"April 26 2013", main:"10 13 15 18 25 36 47", bonus:"40"},
  {date:"April 19 2013", main:"2 3 8 20 28 31 34", bonus:"42"},
  {date:"April 12 2013", main:"3 6 37 40 42 44 48", bonus:"18"},
  {date:"April 5 2013", main:"2 14 15 17 24 38 40", bonus:"31"},
  {date:"March 29 2013", main:"8 11 12 13 22 33 47", bonus:"7"},
  {date:"March 22 2013", main:"7 12 16 19 21 24 47", bonus:"34"},
  {date:"March 15 2013", main:"9 16 17 19 22 41 43", bonus:"12"},
  {date:"March 8 2013", main:"9 15 17 28 35 39 41", bonus:"36"},
  {date:"March 1 2013", main:"1 2 5 6 38 39 46", bonus:"33"},
  {date:"February 22 2013", main:"5 12 24 31 39 45 49", bonus:"35"},
  {date:"February 15 2013", main:"14 23 24 25 28 41 45", bonus:"37"},
  {date:"February 8 2013", main:"3 8 13 30 38 45 47", bonus:"10"},
  {date:"February 1 2013", main:"5 9 10 32 37 44 46", bonus:"38"},
  {date:"January 25 2013", main:"1 18 19 29 31 32 46", bonus:"36"},
  {date:"January 18 2013", main:"8 16 17 28 32 34 47", bonus:"19"},
  {date:"January 11 2013", main:"2 25 26 37 39 48 49", bonus:"40"},
  {date:"January 4 2013", main:"3 6 16 23 27 28 34", bonus:"22"},
  {date:"December 28 2012", main:"1 9 25 28 32 41 48", bonus:"12"},
  {date:"December 21 2012", main:"7 8 17 18 20 40 41", bonus:"33"},
  {date:"December 14 2012", main:"3 6 10 33 39 48 49", bonus:"18"},
  {date:"December 7 2012", main:"5 11 22 29 38 42 49", bonus:"33"},
  {date:"November 30 2012", main:"3 10 13 23 31 41 45", bonus:"33"},
  {date:"November 23 2012", main:"6 8 10 17 28 29 38", bonus:"34"},
  {date:"November 16 2012", main:"1 5 9 19 27 35 48", bonus:"30"},
  {date:"November 9 2012", main:"8 9 11 22 24 42 46", bonus:"13"},
  {date:"November 2 2012", main:"1 2 5 26 29 36 47", bonus:"13"},
  {date:"October 26 2012", main:"3 4 20 25 30 35 48", bonus:"23"},
  {date:"October 19 2012", main:"1 2 3 15 22 37 41", bonus:"6"},
  {date:"October 12 2012", main:"5 7 12 15 35 45 47", bonus:"40"},
  {date:"October 5 2012", main:"1 12 23 27 30 31 37", bonus:"33"},
  {date:"September 28 2012", main:"5 6 32 33 39 42 47", bonus:"9"},
  {date:"September 21 2012", main:"7 8 10 11 19 34 45", bonus:"44"},
  {date:"September 14 2012", main:"2 27 30 31 37 46 47", bonus:"21"},
  {date:"September 7 2012", main:"11 14 18 20 37 41 46", bonus:"8"},
  {date:"August 31 2012", main:"5 12 13 28 33 37 43", bonus:"44"},
  {date:"August 24 2012", main:"2 3 5 22 23 32 33", bonus:"8"},
  {date:"August 17 2012", main:"18 19 22 27 29 36 47", bonus:"25"},
  {date:"August 10 2012", main:"2 15 18 19 22 27 49", bonus:"40"},
  {date:"August 3 2012", main:"1 2 18 26 27 39 42", bonus:"33"},
  {date:"July 27 2012", main:"2 20 25 26 46 47 48", bonus:"44"},
  {date:"July 20 2012", main:"4 7 29 35 39 43 44", bonus:"46"},
  {date:"July 13 2012", main:"3 13 14 23 33 36 45", bonus:"7"},
  {date:"July 6 2012", main:"14 26 31 34 37 45 48", bonus:"38"},
  {date:"June 29 2012", main:"10 14 20 28 35 40 42", bonus:"44"},
  {date:"June 22 2012", main:"1 12 20 22 30 34 38", bonus:"33"},
  {date:"June 15 2012", main:"8 11 20 28 36 43 47", bonus:"18"},
  {date:"June 8 2012", main:"9 10 16 24 26 44 48", bonus:"27"},
  {date:"June 1 2012", main:"4 7 13 24 26 27 43", bonus:"41"},
  {date:"May 25 2012", main:"1 2 3 6 12 20 41", bonus:"10"},
  {date:"May 18 2012", main:"3 4 13 15 21 29 48", bonus:"26"},
  {date:"May 11 2012", main:"1 6 7 24 31 36 39", bonus:"26"},
  {date:"May 4 2012", main:"3 5 6 25 37 43 45", bonus:"21"},
  {date:"April 27 2012", main:"3 23 28 40 42 43 45", bonus:"17"},
  {date:"April 20 2012", main:"14 15 16 19 30 36 46", bonus:"42"},
  {date:"April 13 2012", main:"2 6 11 12 16 39 45", bonus:"3"},
  {date:"April 6 2012", main:"15 18 19 25 32 42 49", bonus:"43"},
  {date:"March 30 2012", main:"3 11 12 19 35 45 47", bonus:"13"},
  {date:"March 23 2012", main:"6 18 21 23 24 32 48", bonus:"47"},
  {date:"March 16 2012", main:"5 7 18 24 28 41 49", bonus:"26"},
  {date:"March 9 2012", main:"7 18 19 29 39 47 48", bonus:"32"},
  {date:"March 2 2012", main:"4 13 14 15 34 46 47", bonus:"49"},
  {date:"February 24 2012", main:"6 17 23 24 25 31 38", bonus:"7"},
  {date:"February 17 2012", main:"1 15 26 28 31 39 49", bonus:"18"},
  {date:"February 10 2012", main:"1 5 25 35 38 44 47", bonus:"39"},
  {date:"February 3 2012", main:"2 8 12 14 33 37 47", bonus:"46"},
  {date:"January 27 2012", main:"8 24 28 34 37 43 45", bonus:"21"},
  {date:"January 20 2012", main:"9 15 21 23 41 43 44", bonus:"46"},
  {date:"January 13 2012", main:"6 15 18 26 41 46 48", bonus:"27"},
  {date:"January 6 2012", main:"1 2 8 13 22 45 46", bonus:"48"},
  {date:"December 30 2011", main:"2 13 22 28 35 41 42", bonus:"4"},
  {date:"December 23 2011", main:"3 4 9 25 26 37 39", bonus:"45"},
  {date:"December 16 2011", main:"11 24 26 31 42 44 46", bonus:"22"},
  {date:"December 9 2011", main:"3 11 18 19 23 27 44", bonus:"46"},
  {date:"December 2 2011", main:"23 29 33 34 39 44 48", bonus:"32"},
  {date:"November 25 2011", main:"8 10 15 24 30 35 49", bonus:"23"},
  {date:"November 18 2011", main:"8 17 27 28 39 44 49", bonus:"24"},
  {date:"November 11 2011", main:"5 7 9 25 31 37 39", bonus:"22"},
  {date:"November 4 2011", main:"5 8 13 15 27 28 37", bonus:"39"},
  {date:"October 28 2011", main:"2 4 18 20 29 38 41", bonus:"9"},
  {date:"October 21 2011", main:"6 23 27 30 34 38 45", bonus:"21"},
  {date:"October 14 2011", main:"1 3 7 19 31 39 49", bonus:"17"},
  {date:"October 7 2011", main:"12 13 24 25 26 41 43", bonus:"7"},
  {date:"September 30 2011", main:"5 6 7 12 14 18 25", bonus:"38"},
  {date:"September 23 2011", main:"8 16 24 27 30 38 40", bonus:"18"},
  {date:"September 16 2011", main:"12 18 22 24 28 43 49", bonus:"21"},
  {date:"September 9 2011", main:"6 8 15 20 30 32 42", bonus:"17"},
  {date:"September 2 2011", main:"2 3 8 13 18 20 23", bonus:"10"},
  {date:"August 26 2011", main:"6 11 12 14 35 43 44", bonus:"42"},
  {date:"August 19 2011", main:"4 14 24 41 43 46 49", bonus:"1"},
  {date:"August 12 2011", main:"4 15 21 30 33 35 47", bonus:"28"},
  {date:"August 5 2011", main:"11 17 18 20 22 29 45", bonus:"27"},
  {date:"July 29 2011", main:"1 2 3 17 24 35 36", bonus:"30"},
  {date:"July 22 2011", main:"4 13 23 28 32 40 42", bonus:"12"},
  {date:"July 15 2011", main:"3 7 8 12 18 24 41", bonus:"1"},
  {date:"July 8 2011", main:"17 22 28 38 41 43 45", bonus:"5"},
  {date:"July 1 2011", main:"15 18 20 28 29 40 47", bonus:"38"},
  {date:"June 24 2011", main:"2 9 10 15 29 44 48", bonus:"22"},
  {date:"June 17 2011", main:"2 7 14 16 22 27 47", bonus:"25"},
  {date:"June 10 2011", main:"8 11 12 25 28 30 33", bonus:"16"},
  {date:"June 3 2011", main:"8 21 28 32 33 34 48", bonus:"38"},
  {date:"May 27 2011", main:"5 9 19 20 21 28 30", bonus:"36"},
  {date:"May 20 2011", main:"7 12 14 18 30 45 47", bonus:"20"},
  {date:"May 13 2011", main:"7 8 14 32 38 42 44", bonus:"30"},
  {date:"May 6 2011", main:"6 19 24 25 26 35 36", bonus:"23"},
  {date:"April 29 2011", main:"1 13 20 24 39 45 47", bonus:"25"},
  {date:"April 22 2011", main:"7 19 34 35 38 42 46", bonus:"11"},
  {date:"April 15 2011", main:"3 12 14 15 25 32 49", bonus:"37"},
  {date:"April 8 2011", main:"13 18 25 41 44 48 49", bonus:"1"},
  {date:"April 1 2011", main:"5 6 11 12 24 26 34", bonus:"49"},
  {date:"March 25 2011", main:"1 4 22 25 26 36 46", bonus:"5"},
  {date:"March 18 2011", main:"2 5 10 21 25 35 49", bonus:"40"},
  {date:"March 11 2011", main:"2 3 4 20 22 40 43", bonus:"9"},
  {date:"March 4 2011", main:"3 18 27 29 32 33 35", bonus:"47"},
  {date:"February 25 2011", main:"3 14 19 30 32 39 46", bonus:"8"},
  {date:"February 18 2011", main:"3 7 12 16 20 42 48", bonus:"31"},
  {date:"February 11 2011", main:"4 6 13 19 26 29 47", bonus:"43"},
  {date:"February 4 2011", main:"1 3 13 18 19 39 48", bonus:"40"},
  {date:"January 28 2011", main:"7 10 14 20 21 23 31", bonus:"41"},
  {date:"January 21 2011", main:"2 18 19 29 42 47 49", bonus:"17"},
  {date:"January 14 2011", main:"2 6 10 12 24 30 37", bonus:"3"},
  {date:"January 7 2011", main:"2 10 13 15 23 28 49", bonus:"40"},
  {date:"December 31 2010", main:"2 7 10 22 32 34 38", bonus:"1"},
  {date:"December 24 2010", main:"8 23 25 26 33 41 43", bonus:"21"},
  {date:"December 17 2010", main:"1 16 28 29 33 37 47", bonus:"24"},
  {date:"December 10 2010", main:"7 9 12 20 28 38 44", bonus:"10"},
  {date:"December 3 2010", main:"1 10 13 26 43 46 49", bonus:"31"},
  {date:"November 26 2010", main:"12 21 23 27 28 29 37", bonus:"9"},
  {date:"November 19 2010", main:"4 13 25 29 36 40 48", bonus:"24"},
  {date:"November 12 2010", main:"13 15 17 18 19 47 49", bonus:"38"},
  {date:"November 5 2010", main:"7 10 24 30 35 36 39", bonus:"3"},
  {date:"October 29 2010", main:"2 6 21 26 28 33 47", bonus:"11"},
  {date:"October 22 2010", main:"12 15 19 20 28 29 39", bonus:"14"},
  {date:"October 15 2010", main:"3 14 17 25 30 33 39", bonus:"7"},
  {date:"October 8 2010", main:"3 4 5 8 13 22 33", bonus:"32"},
  {date:"October 1 2010", main:"10 12 13 25 28 29 41", bonus:"39"},
  {date:"September 24 2010", main:"9 22 25 30 31 39 42", bonus:"19"},
  {date:"September 17 2010", main:"2 5 6 43 46 47 48", bonus:"39"},
  {date:"September 10 2010", main:"4 17 27 32 34 39 47", bonus:"13"},
  {date:"September 3 2010", main:"12 17 27 28 31 36 48", bonus:"37"},
  {date:"August 27 2010", main:"3 14 26 27 29 32 34", bonus:"1"},
  {date:"August 20 2010", main:"4 5 7 8 18 30 35", bonus:"39"},
  {date:"August 13 2010", main:"19 25 27 29 30 36 46", bonus:"15"},
  {date:"August 6 2010", main:"1 5 6 32 36 38 44", bonus:"29"},
  {date:"July 30 2010", main:"5 7 11 40 41 47 48", bonus:"6"},
  {date:"July 23 2010", main:"17 19 26 29 34 35 38", bonus:"47"},
  {date:"July 16 2010", main:"10 14 26 34 43 47 48", bonus:"28"},
  {date:"July 9 2010", main:"9 10 19 24 28 30 31", bonus:"46"},
  {date:"July 2 2010", main:"9 19 25 26 29 30 44", bonus:"33"},
  {date:"June 25 2010", main:"5 22 28 31 39 46 48", bonus:"4"},
  {date:"June 18 2010", main:"5 6 26 29 34 36 43", bonus:"49"},
  {date:"June 11 2010", main:"2 7 12 25 29 32 35", bonus:"26"},
  {date:"June 4 2010", main:"3 18 27 30 33 40 45", bonus:"31"},
  {date:"May 28 2010", main:"11 18 23 24 27 28 39", bonus:"1"},
  {date:"May 21 2010", main:"14 16 30 35 36 45 49", bonus:"10"},
  {date:"May 14 2010", main:"7 17 19 23 31 36 41", bonus:"1"},
  {date:"May 7 2010", main:"3 6 10 14 19 25 33", bonus:"1"},
  {date:"April 30 2010", main:"1 3 4 5 16 32 33", bonus:"41"},
  {date:"April 23 2010", main:"8 11 16 21 24 28 41", bonus:"37"},
  {date:"April 16 2010", main:"6 7 17 20 32 44 49", bonus:"46"},
  {date:"April 9 2010", main:"11 16 29 30 31 33 42", bonus:"24"},
  {date:"April 2 2010", main:"4 9 12 15 28 29 43", bonus:"17"},
  {date:"March 26 2010", main:"3 11 12 16 34 36 37", bonus:"18"},
  {date:"March 19 2010", main:"1 3 6 34 37 42 45", bonus:"27"},
  {date:"March 15 2010", main:"5 8 18 22 32 39 45", bonus:"19"},
  {date:"March 12 2010", main:"17 18 19 21 32 40 49", bonus:"6"},
  {date:"March 5 2010", main:"5 8 18 22 32 39 45", bonus:"19"},
  {date:"February 26 2010", main:"2 27 30 32 35 36 38", bonus:"39"},
  {date:"February 19 2010", main:"4 23 27 32 35 43 47", bonus:"24"},
  {date:"February 12 2010", main:"9 12 17 23 24 42 47", bonus:"37"},
  {date:"February 5 2010", main:"10 19 25 29 39 41 42", bonus:"21"},
  {date:"January 29 2010", main:"16 17 22 24 40 41 47", bonus:"45"},
  {date:"January 22 2010", main:"17 26 30 32 34 39 41", bonus:"49"},
  {date:"January 15 2010", main:"12 17 22 30 34 43 49", bonus:"48"},
  {date:"January 8 2010", main:"8 17 21 23 24 28 39", bonus:"31"},
  {date:"January 1 2010", main:"7 9 13 18 27 33 44", bonus:"15"},
  {date:"December 25 2009", main:"8 9 12 13 29 30 31", bonus:"47"},
  {date:"December 18 2009", main:"8 10 15 17 33 34 35", bonus:"13"},
  {date:"December 11 2009", main:"1 4 5 7 22 29 48", bonus:"13"},
  {date:"December 4 2009", main:"1 6 13 19 32 35 40", bonus:"7"},
  {date:"November 27 2009", main:"11 15 24 26 37 38 43", bonus:"17"},
  {date:"November 20 2009", main:"2 8 28 30 36 39 42", bonus:"24"},
  {date:"November 13 2009", main:"8 18 27 28 38 41 48", bonus:"36"},
  {date:"November 6 2009", main:"2 7 8 11 16 17 18", bonus:"12"},
  {date:"October 30 2009", main:"6 9 10 14 17 18 19", bonus:"46"},
  {date:"October 23 2009", main:"4 7 10 12 23 25 36", bonus:"18"},
  {date:"October 16 2009", main:"4 10 18 20 31 35 44", bonus:"29"},
  {date:"October 9 2009", main:"5 15 25 38 42 46 47", bonus:"26"},
  {date:"October 2 2009", main:"8 27 28 29 31 32 35", bonus:"11"},
  {date:"September 25 2009", main:"5 17 19 25 31 38 46 4"}
];
