let dgHistory = [
  {date:"2020-1-20", main:"6-8-19-20-49", grand:"2"},
  {date:"2020-1-16", main:"16-23-28-37-41", grand:"2"},
  {date:"2020-1-13", main:"5-9-14-17-20", grand:"4"},
  {date:"2020-1-9", main:"11-21-25-42-47", grand:"3"},
  {date:"2020-1-6", main:"11-19-31-38-43", grand:"4"},
  {date:"2020-1-2", main:"4-15-19-26-45", grand:"2"},
  {date:"2019-12-30", main:"1-25-33-42-47", grand:"2"},
  {date:"2019-12-26", main:"3-12-13-21-37", grand:"5"},
  {date:"2019-12-23", main:"4-8-23-40-45", grand:"7"},
  {date:"2019-12-19", main:"7-9-21-43-48", grand:"1"},
  {date:"2019-12-16", main:"17-22-26-38-44", grand:"7"},
  {date:"2019-12-12", main:"10-23-32-33-45", grand:"7"},
  {date:"2019-12-9", main:"6-20-34-38-49", grand:"3"},
  {date:"2019-12-5", main:"2-14-34-40-43", grand:"2"},
  {date:"2019-12-2", main:"9-10-26-37-43", grand:"3"},
  {date:"2019-11-28", main:"14-21-24-27-40", grand:"7"},
  {date:"2019-11-25", main:"5-6-9-20-42", grand:"3"},
  {date:"2019-11-21", main:"15-24-29-39-47", grand:"4"},
  {date:"2019-11-18", main:"22-25-33-44-47", grand:"1"},
  {date:"2019-11-14", main:"7-10-23-33-44", grand:"5"},
  {date:"2019-11-11", main:"7-14-20-22-42", grand:"6"},
  {date:"2019-11-7", main:"9-30-31-37-42", grand:"7"},
  {date:"2019-11-4", main:"1-2-13-18-38", grand:"2"},
  {date:"2019-10-31", main:"17-18-27-42-46", grand:"2"},
  {date:"2019-10-28", main:"7-12-17-18-39", grand:"5"},
  {date:"2019-10-24", main:"3-13-16-19-40", grand:"5"},
  {date:"2019-10-21", main:"16-25-27-28-41", grand:"3"},
  {date:"2019-10-17", main:"7-14-17-23-24", grand:"7"},
  {date:"2019-10-14", main:"4-8-21-29-42", grand:"5"},
  {date:"2019-10-10", main:"6-12-19-34-49", grand:"7"},
  {date:"2019-10-7", main:"4-7-17-24-29", grand:"1"},
  {date:"2019-10-3", main:"1-2-4-19-23", grand:"5"},
  {date:"2019-9-30", main:"3-12-41-43-46", grand:"1"},
  {date:"2019-9-26", main:"4-6-14-21-37", grand:"3"},
  {date:"2019-9-23", main:"15-27-29-31-44", grand:"6"},
  {date:"2019-9-19", main:"6-19-24-35-46", grand:"2"},
  {date:"2019-9-16", main:"3-13-25-26-29", grand:"3"},
  {date:"2019-9-12", main:"4-12-30-32-48", grand:"7"},
  {date:"2019-9-9", main:"15-32-39-42-48", grand:"3"},
  {date:"2019-9-5", main:"10-30-36-38-44", grand:"4"},
  {date:"2019-9-2", main:"16-28-36-37-49", grand:"1"},
  {date:"2019-8-29", main:"1-4-6-7-27", grand:"7"},
  {date:"2019-8-26", main:"4-13-23-27-38", grand:"2"},
  {date:"2019-8-22", main:"5-12-15-25-32", grand:"6"},
  {date:"2019-8-19", main:"11-14-21-41-42", grand:"3"},
  {date:"2019-8-15", main:"6-17-19-31-43", grand:"2"},
  {date:"2019-8-12", main:"9-17-36-44-49", grand:"2"},
  {date:"2019-8-8", main:"24-25-36-39-41", grand:"6"},
  {date:"2019-8-5", main:"6-20-37-43-44", grand:"7"},
  {date:"2019-8-1", main:"4-7-24-31-35", grand:"4"},
  {date:"2019-7-29", main:"1-3-22-32-40", grand:"1"},
  {date:"2019-7-25", main:"16-26-27-36-38", grand:"2"},
  {date:"2019-7-22", main:"4-29-42-44-49", grand:"4"},
  {date:"2019-7-18", main:"2-9-33-36-38", grand:"4"},
  {date:"2019-7-15", main:"3-6-12-29-37", grand:"1"},
  {date:"2019-7-11", main:"9-15-21-36-43", grand:"1"},
  {date:"2019-7-8", main:"2-20-27-34-37", grand:"2"},
  {date:"2019-7-4", main:"8-30-31-39-41", grand:"7"},
  {date:"2019-7-1", main:"16-18-34-36-46", grand:"1"},
  {date:"2019-6-27", main:"6-33-36-42-43", grand:"3"},
  {date:"2019-6-24", main:"9-25-31-34-36", grand:"2"},
  {date:"2019-6-20", main:"7-20-22-38-46", grand:"7"},
  {date:"2019-6-17", main:"4-6-8-13-47", grand:"3"},
  {date:"2019-6-13", main:"1-7-18-26-28", grand:"6"},
  {date:"2019-6-10", main:"17-18-31-35-48", grand:"6"},
  {date:"2019-6-6", main:"9-26-36-46-49", grand:"7"},
  {date:"2019-6-3", main:"6-22-30-32-34", grand:"2"},
  {date:"2019-5-30", main:"13-18-32-34-38", grand:"5"},
  {date:"2019-5-27", main:"1-4-12-19-21", grand:"1"},
  {date:"2019-5-23", main:"10-15-22-41-47", grand:"6"},
  {date:"2019-5-20", main:"1-17-30-31-49", grand:"5"},
  {date:"2019-5-16", main:"13-15-37-43-49", grand:"6"},
  {date:"2019-5-13", main:"6-7-11-23-25", grand:"7"},
  {date:"2019-5-9", main:"1-3-10-19-27", grand:"3"},
  {date:"2019-5-6", main:"3-24-29-36-43", grand:"3"},
  {date:"2019-5-2", main:"7-8-24-38-39", grand:"3"},
  {date:"2019-4-29", main:"3-11-36-41-48", grand:"1"},
  {date:"2019-4-25", main:"8-9-30-36-39", grand:"1"},
  {date:"2019-4-22", main:"5-17-19-30-44", grand:"6"},
  {date:"2019-4-18", main:"19-34-36-44-49", grand:"5"},
  {date:"2019-4-15", main:"1-3-7-26-29", grand:"7"},
  {date:"2019-4-11", main:"11-19-20-29-39", grand:"5"},
  {date:"2019-4-8", main:"14-16-17-37-48", grand:"5"},
  {date:"2019-4-4", main:"4-29-35-38-47", grand:"3"},
  {date:"2019-4-1", main:"2-24-30-38-48", grand:"1"},
  {date:"2019-3-28", main:"11-12-14-15-22", grand:"3"},
  {date:"2019-3-25", main:"2-4-8-41-47", grand:"3"},
  {date:"2019-3-21", main:"15-19-30-34-49", grand:"1"},
  {date:"2019-3-18", main:"1-7-11-37-47", grand:"5"},
  {date:"2019-3-14", main:"3-13-18-29-46", grand:"1"},
  {date:"2019-3-11", main:"7-10-25-30-47", grand:"5"},
  {date:"2019-3-7", main:"12-14-15-29-30", grand:"5"},
  {date:"2019-3-4", main:"1-9-21-31-39", grand:"7"},
  {date:"2019-2-28", main:"4-21-29-30-35", grand:"3"},
  {date:"2019-2-25", main:"2-18-26-37-48", grand:"5"},
  {date:"2019-2-21", main:"1-9-11-32-41", grand:"7"},
  {date:"2019-2-18", main:"7-9-14-25-46", grand:"1"},
  {date:"2019-2-14", main:"1-5-10-33-48", grand:"2"},
  {date:"2019-2-11", main:"14-23-41-46-47", grand:"5"},
  {date:"2019-2-7", main:"13-22-32-34-46", grand:"5"},
  {date:"2019-2-4", main:"3-15-16-42-45", grand:"5"},
  {date:"2019-1-31", main:"21-25-37-40-42", grand:"6"},
  {date:"2019-1-28", main:"7-19-27-33-35", grand:"1"},
  {date:"2019-1-24", main:"1-5-6-15-31", grand:"4"},
  {date:"2019-1-21", main:"8-9-18-43-48", grand:"2"},
  {date:"2019-1-17", main:"9-14-17-18-41", grand:"2"},
  {date:"2019-1-14", main:"2-25-33-39-40", grand:"2"},
  {date:"2019-1-10", main:"7-9-13-19-29", grand:"7"},
  {date:"2019-1-7", main:"2-7-8-28-31", grand:"2"},
  {date:"2019-1-3", main:"2-4-12-17-37", grand:"6"},
  {date:"2018-12-31", main:"3-20-38-42-46", grand:"3"},
  {date:"2018-12-27", main:"3-22-25-27-41", grand:"2"},
  {date:"2018-12-24", main:"7-19-20-21-48", grand:"5"},
  {date:"2018-12-20", main:"13-24-26-32-42", grand:"1"},
  {date:"2018-12-17", main:"14-17-29-40-46", grand:"7"},
  {date:"2018-12-13", main:"4-20-28-34-49", grand:"4"},
  {date:"2018-12-10", main:"5-11-15-34-40", grand:"3"},
  {date:"2018-12-6", main:"4-30-31-35-45", grand:"6"},
  {date:"2018-12-3", main:"1-4-13-17-49", grand:"6"},
  {date:"2018-11-29", main:"4-15-19-23-48", grand:"5"},
  {date:"2018-11-26", main:"8-26-28-37-47", grand:"1"},
  {date:"2018-11-22", main:"4-24-25-29-42", grand:"7"},
  {date:"2018-11-19", main:"29-31-35-36-46", grand:"5"},
  {date:"2018-11-15", main:"13-27-38-42-49", grand:"1"},
  {date:"2018-11-12", main:"2-13-18-19-43", grand:"2"},
  {date:"2018-11-8", main:"6-7-29-33-35", grand:"3"},
  {date:"2018-11-5", main:"4-27-34-40-42", grand:"1"},
  {date:"2018-11-1", main:"2-3-5-17-39", grand:"7"},
  {date:"2018-10-29", main:"8-11-12-13-23", grand:"3"},
  {date:"2018-10-25", main:"5-11-14-16-39", grand:"7"},
  {date:"2018-10-22", main:"10-11-33-40-42", grand:"5"},
  {date:"2018-10-18", main:"2-23-29-32-48", grand:"3"},
  {date:"2018-10-15", main:"10-18-24-37-39", grand:"1"},
  {date:"2018-10-11", main:"1-11-25-26-39", grand:"6"},
  {date:"2018-10-8", main:"1-13-24-41-42", grand:"4"},
  {date:"2018-10-4", main:"2-14-39-46-49", grand:"3"},
  {date:"2018-10-1", main:"7-25-28-45-49", grand:"4"},
  {date:"2018-9-27", main:"3-9-12-21-47", grand:"3"},
  {date:"2018-9-24", main:"14-25-27-28-43", grand:"4"},
  {date:"2018-9-20", main:"3-10-15-23-48", grand:"2"},
  {date:"2018-9-17", main:"4-15-20-24-48", grand:"5"},
  {date:"2018-9-13", main:"1-11-25-29-46", grand:"7"},
  {date:"2018-9-10", main:"3-29-31-43-48", grand:"7"},
  {date:"2018-9-6", main:"4-8-20-22-49", grand:"6"},
  {date:"2018-9-3", main:"13-26-36-39-49", grand:"1"},
  {date:"2018-8-30", main:"25-28-35-39-48", grand:"5"},
  {date:"2018-8-27", main:"7-15-23-31-48", grand:"4"},
  {date:"2018-8-23", main:"5-11-16-24-42", grand:"4"},
  {date:"2018-8-20", main:"8-12-18-35-40", grand:"2"},
  {date:"2018-8-16", main:"8-9-25-31-41", grand:"2"},
  {date:"2018-8-13", main:"5-9-30-31-47", grand:"7"},
  {date:"2018-8-9", main:"2-15-21-32-34", grand:"3"},
  {date:"2018-8-6", main:"11-29-31-34-38", grand:"7"},
  {date:"2018-8-2", main:"6-9-22-32-38", grand:"7"},
  {date:"2018-7-30", main:"15-17-30-44-47", grand:"6"},
  {date:"2018-7-26", main:"32-34-43-44-46", grand:"6"},
  {date:"2018-7-23", main:"19-32-38-44-48", grand:"2"},
  {date:"2018-7-19", main:"27-31-36-38-39", grand:"6"},
  {date:"2018-7-16", main:"5-11-27-34-46", grand:"1"},
  {date:"2018-7-12", main:"1-2-32-36-39", grand:"4"},
  {date:"2018-7-9", main:"13-26-41-42-47", grand:"2"},
  {date:"2018-7-5", main:"14-20-27-40-41", grand:"2"},
  {date:"2018-7-2", main:"5-18-23-39-42", grand:"3"},
  {date:"2018-6-28", main:"6-39-40-48-49", grand:"4"},
  {date:"2018-6-25", main:"12-20-30-43-46", grand:"2"},
  {date:"2018-6-21", main:"13-28-30-31-43", grand:"7"},
  {date:"2018-6-18", main:"1-16-31-44-48", grand:"2"},
  {date:"2018-6-14", main:"1-19-33-41-47", grand:"1"},
  {date:"2018-6-11", main:"1-12-19-26-35", grand:"7"},
  {date:"2018-6-7", main:"2-3-4-40-47", grand:"1"},
  {date:"2018-6-4", main:"1-5-11-30-38", grand:"5"},
  {date:"2018-5-31", main:"2-9-41-45-48", grand:"1"},
  {date:"2018-5-28", main:"14-28-29-42-48", grand:"5"},
  {date:"2018-5-24", main:"18-26-38-43-49", grand:"7"},
  {date:"2018-5-21", main:"6-8-22-30-38", grand:"6"},
  {date:"2018-5-17", main:"1-5-18-42-46", grand:"3"},
  {date:"2018-5-14", main:"3-7-11-13-25", grand:"1"},
  {date:"2018-5-10", main:"4-16-25-34-39", grand:"4"},
  {date:"2018-5-7", main:"1-36-39-45-49", grand:"6"},
  {date:"2018-5-3", main:"1-4-29-38-47", grand:"5"},
  {date:"2018-4-30", main:"7-24-25-35-37", grand:"2"},
  {date:"2018-4-26", main:"6-14-22-26-35", grand:"7"},
  {date:"2018-4-23", main:"13-20-21-37-38", grand:"3"},
  {date:"2018-4-19", main:"13-21-24-26-43", grand:"1"},
  {date:"2018-4-16", main:"14-17-32-38-49", grand:"7"},
  {date:"2018-4-12", main:"31-38-40-41-44", grand:"5"},
  {date:"2018-4-9", main:"2-9-34-41-43", grand:"1"},
  {date:"2018-4-5", main:"5-8-13-18-47", grand:"4"},
  {date:"2018-4-2", main:"22-25-44-45-48", grand:"6"},
  {date:"2018-3-29", main:"14-17-29-36-43", grand:"1"},
  {date:"2018-3-26", main:"14-22-26-36-45", grand:"7"},
  {date:"2018-3-22", main:"3-9-18-19-22", grand:"2"},
  {date:"2018-3-19", main:"6-30-34-46-49", grand:"4"},
  {date:"2018-3-15", main:"9-10-14-23-44", grand:"6"},
  {date:"2018-3-12", main:"4-17-23-24-32", grand:"4"},
  {date:"2018-3-8", main:"11-17-38-43-49", grand:"1"},
  {date:"2018-3-5", main:"12-21-29-33-35", grand:"3"},
  {date:"2018-3-1", main:"1-15-24-31-42", grand:"1"},
  {date:"2018-2-26", main:"3-35-40-45-48", grand:"1"},
  {date:"2018-2-22", main:"14-20-24-26-32", grand:"1"},
  {date:"2018-2-19", main:"2-8-26-43-45", grand:"5"},
  {date:"2018-2-15", main:"2-6-12-32-43", grand:"1"},
  {date:"2018-2-12", main:"17-21-34-42-44", grand:"3"},
  {date:"2018-2-8", main:"12-15-22-34-49", grand:"3"},
  {date:"2018-2-5", main:"6-15-25-32-46", grand:"1"},
  {date:"2018-2-1", main:"4-7-17-25-41", grand:"7"},
  {date:"2018-1-29", main:"7-16-27-34-38", grand:"3"},
  {date:"2018-1-25", main:"15-22-27-32-44", grand:"1"},
  {date:"2018-1-22", main:"6-26-27-43-44", grand:"7"},
  {date:"2018-1-18", main:"5-30-33-36-48", grand:"2"},
  {date:"2018-1-15", main:"4-10-20-37-41", grand:"3"},
  {date:"2018-1-11", main:"1-11-24-35-38", grand:"2"},
  {date:"2018-1-8", main:"4-10-38-43-46", grand:"3"},
  {date:"2018-1-4", main:"3-4-11-30-37", grand:"6"},
  {date:"2018-1-1", main:"26-29-36-40-45", grand:"1"},
  {date:"2017-12-28", main:"24-27-28-43-49", grand:"6"},
  {date:"2017-12-25", main:"8-11-16-40-46", grand:"4"},
  {date:"2017-12-21", main:"12-32-38-46-47", grand:"4"},
  {date:"2017-12-18", main:"13-19-27-33-41", grand:"1"},
  {date:"2017-12-14", main:"5-7-23-39-47", grand:"7"},
  {date:"2017-12-11", main:"17-19-20-37-47", grand:"6"},
  {date:"2017-12-7", main:"7-17-31-39-46", grand:"6"},
  {date:"2017-12-4", main:"12-26-31-37-45", grand:"4"},
  {date:"2017-11-30", main:"7-15-31-35-48", grand:"7"},
  {date:"2017-11-27", main:"6-9-25-33-34", grand:"1"},
  {date:"2017-11-23", main:"2-22-25-34-39", grand:"1"},
  {date:"2017-11-20", main:"3-10-13-30-34", grand:"4"},
  {date:"2017-11-16", main:"9-12-22-37-44", grand:"6"},
  {date:"2017-11-13", main:"32-37-38-41-42", grand:"2"},
  {date:"2017-11-9", main:"6-12-15-17-39", grand:"2"},
  {date:"2017-11-6", main:"4-18-22-38-48", grand:"2"},
  {date:"2017-11-2", main:"16-17-26-32-38", grand:"1"},
  {date:"2017-10-30", main:"16-27-32-34-45", grand:"2"},
  {date:"2017-10-26", main:"5-17-24-35-36", grand:"7"},
  {date:"2017-10-23", main:"5-14-22-34-40", grand:"4"},
  {date:"2017-10-19", main:"7-27-39-42-44", grand:"7"},
  {date:"2017-10-16", main:"2-32-39-40-42", grand:"7"},
  {date:"2017-10-12", main:"3-7-11-23-45", grand:"2"},
  {date:"2017-10-9", main:"13-27-35-39-43", grand:"7"},
  {date:"2017-10-5", main:"5-22-40-47-48", grand:"7"},
  {date:"2017-10-2", main:"2-12-14-35-45", grand:"3"},
  {date:"2017-9-28", main:"15-17-20-35-36", grand:"3"},
  {date:"2017-9-25", main:"19-28-30-34-39", grand:"5"},
  {date:"2017-9-21", main:"2-4-12-23-47", grand:"2"},
  {date:"2017-9-18", main:"1-2-7-8-19", grand:"5"},
  {date:"2017-9-14", main:"18-19-24-35-42", grand:"1"},
  {date:"2017-9-11", main:"3-10-23-37-39", grand:"3"},
  {date:"2017-9-7", main:"3-8-35-41-44", grand:"1"},
  {date:"2017-9-4", main:"3-5-34-41-45", grand:"3"},
  {date:"2017-8-31", main:"3-4-6-27-37", grand:"6"},
  {date:"", main:"17-21-22-28-44", grand:"1"},
  {date:"", main:"8-30-33-34-47", grand:"6"},
  {date:"", main:"6-20-21-32-33", grand:"2"},
  {date:"", main:"22-33-37-40-46", grand:"7"},
  {date:"", main:"19-24-35-37-43", grand:"5"},
  {date:"", main:"2-3-27-35-49", grand:"7"},
  {date:"", main:"5-10-16-18-37", grand:"2"},
  {date:"", main:"2-5-9-15-33", grand:"5"},
  {date:"", main:"1-3-7-13-42", grand:"2"},
  {date:"", main:"6-21-22-26-45", grand:"7"},
  {date:"", main:"14-18-39-42-49", grand:"2"},
  {date:"", main:"14-16-37-42-44", grand:"6"},
  {date:"", main:"8-10-26-28-35", grand:"2"},
  {date:"", main:"6-10-17-33-47", grand:"5"},
  {date:"", main:"21-32-33-39-46", grand:"2"},
  {date:"", main:"4-5-11-24-49", grand:"1"},
  {date:"", main:"10-13-26-32-33", grand:"4"},
  {date:"", main:"10-18-20-21-48", grand:"7"},
  {date:"", main:"6-21-23-29-45", grand:"2"},
  {date:"", main:"11-21-37-44-47", grand:"4"},
  {date:"", main:"19-23-45-47-48", grand:"3"},
  {date:"", main:"4-12-20-28-33", grand:"1"},
  {date:"", main:"7-12-25-36-49", grand:"2"},
  {date:"", main:"9-21-30-43-49", grand:"1"},
  {date:"", main:"20-25-39-44-46", grand:"3"},
  {date:"", main:"1-2-26-36-46", grand:"4"},
  {date:"", main:"5-15-19-34-41", grand:"6"},
  {date:"", main:"12-14-23-27-39", grand:"3"},
  {date:"", main:"7-25-26-37-48", grand:"3"},
  {date:"", main:"1-13-24-28-47", grand:"7"},
  {date:"", main:"1-35-39-45-46", grand:"4"},
  {date:"", main:"9-13-18-42-43", grand:"7"},
  {date:"", main:"15-18-27-30-45", grand:"1"},
  {date:"", main:"4-8-18-29-43", grand:"7"},
  {date:"", main:"4-13-16-36-49", grand:"2"},
  {date:"", main:"3-5-6-29-33", grand:"4"},
  {date:"", main:"6-17-26-27-36", grand:"3"},
  {date:"", main:"1-25-33-37-41", grand:"5"},
  {date:"", main:"3-6-10-39-44", grand:"6"},
  {date:"", main:"9-17-20-43-48", grand:"1"},
  {date:"", main:"12-24-32-33-42", grand:"7"},
  {date:"", main:"8-15-36-40-47", grand:"5"},
  {date:"", main:"2-10-13-24-37", grand:"5"},
  {date:"", main:"19-27-31-41-43", grand:"2"},
  {date:"", main:"6-10-13-28-47", grand:"5"},
  {date:"", main:"8-30-31-38-40", grand:"1"},
  {date:"", main:"4-25-31-38-42", grand:"2"},
  {date:"", main:"1-5-24-27-41", grand:"5"},
  {date:"", main:"3-4-5-35-42", grand:"6"},
  {date:"", main:"20-27-34-43-47", grand:"4"},
  {date:"", main:"10-14-20-29-33", grand:"2"},
  {date:"", main:"2-20-22-34-40", grand:"2"},
  {date:"", main:"6-7-31-34-38", grand:"2"},
  {date:"", main:"4-42-46-47-48", grand:"7"},
  {date:"", main:"7-9-33-34-48", grand:"1"},
  {date:"", main:"7-15-23-30-47", grand:"1"},
  {date:"", main:"2-5-20-21-47", grand:"7"},
  {date:"", main:"8-12-14-16-44", grand:"1"},
  {date:"", main:"11-20-21-24-39", grand:"1"},
  {date:"", main:"4-8-14-22-34", grand:"1"},
  {date:"", main:"6-25-26-42-47", grand:"3"},
  {date:"", main:"20-26-37-45-49", grand:"5"},
  {date:"", main:"21-26-27-30-47", grand:"1"},
  {date:"", main:"11-17-24-35-38", grand:"6"},
  {date:"", main:"3-19-24-37-46", grand:"6"},
  {date:"", main:"5-7-11-13-32", grand:"6"},
  {date:"", main:"10-31-40-42-46", grand:"2"},
  {date:"", main:"19-25-27-34-44", grand:"1"},
  {date:"", main:"16-19-32-35-44", grand:"3"},
  {date:"", main:"4-23-34-39-40", grand:"3"},
  {date:"", main:"16-24-29-37-40", grand:"3"},
  {date:"", main:"6-7-28-30-38", grand:"6"},
  {date:"", main:"6-7-10-14-33", grand:"5"},
  {date:"", main:"24-28-36-39-48", grand:"3"},
  {date:"", main:"3-9-10-13-25", grand:"4"},
  {date:"", main:"4-7-8-38-40", grand:"6"},
  {date:"", main:"5-18-26-42-45", grand:"4"},
  {date:"", main:"6-16-40-43-46", grand:"6"},
  {date:"", main:"9-12-19-24-39", grand:"4"},
  {date:"", main:"10-21-23-30-32", grand:"5"},
  {date:"", main:"1-11-16-46-48", grand:"5"},
  {date:"", main:"8-12-17-23-29", grand:"3"},
  {date:"", main:"2-5-9-17-44", grand:"1"},
  {date:"", main:"17-23-28-30-48", grand:"5"},
  {date:"", main:"2-10-14-40-45", grand:"3"},
  {date:"", main:"2-14-30-34-43", grand:"7"},
  {date:"", main:"8-14-18-35-37", grand:"5"},
  {date:"", main:"8-9-28-36-48", grand:"1"},
  {date:"", main:"5-14-24-30-34", grand:"7"},
  {date:"", main:"3-14-25-30-45", grand:"2"}
];
