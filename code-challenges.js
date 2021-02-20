/* eslint-disable no-unused-vars */
const { SPANISH_TO_ENGLISH, TRACK_LIST } = require('./constants.js')

const newSingle = (single) => {
  // insert code
  return "New single " + single + " is dropping soon!";
};

const eresBadBunny = (name) => {
  // insert code
  let upper = name.toUpperCase();
  return (upper === "BAD BUNNY");
};

const areYouLil = (name) => {
  var prefix = name.substring(0, 3);
  return (prefix == 'Lil');
};


const mostViewsThreeVideos = (videoOneViews, videoTwoViews, videoThreeViews) => {
    // insert code
    var maxViews = 0;
  
    if(videoOneViews > videoTwoViews){
      maxViews = videoOneViews;
    } else {
      maxViews = videoTwoViews;
    }
    
    if(videoThreeViews > maxViews){
      maxViews = videoThreeViews;
    }
    
    return maxViews;
};

const mostViews = (videoViews) => {
  // insert code
  var maximumViews = 0
  for (i=0; i<videoViews.length; i++){
    if (videoViews[i]> maximumViews){
      maximumViews = videoViews[i]
    }
  }
    return maximumViews;
};

const validateEmail = (email) => {
  // insert code
  var hasSymbol = email.includes("@");
  
  var nameBeforeSymbol;
  var symbolIndex = email.indexOf("@");
  if(symbolIndex > 0){
    nameBeforeSymbol = true;
  } else {
    nameBeforeSymbol = false;
    return("Invalid email: missing recipient name")
  }
  
  var hasGoodEnd;
  if (email.substring(email.length - 4, email.length) == ".org" || ".com" || ".edu" || ".net"){
    hasGoodEnd = true;
  }
  else{
    hasGoodEnd = false;
  }
  
  if(hasSymbol && hasGoodEnd && nameBeforeSymbol){
    return 'Valid email';
  }
  return 'Invalid email';
};

const validateEmailWithMessage = (email) => {
  // insert code
  var hasSymbol = email.includes("@");
  if(hasSymbol == false){
    return 'Invalid email missing @ symbol';
  }
  
  var nameBeforeSymbol;
  var symbolIndex = email.indexOf("@");
  if(symbolIndex > 0){
    nameBeforeSymbol = true;
  } else {
    nameBeforeSymbol = false;
    return "Invalid email: missing recipient name"
  }
  
  var hasGoodEnd;
  if (email.substring(email.length - 4, email.length) == ".org" || ".com" || ".edu" || ".net"){
    hasGoodEnd = true;
  }
  else{
    hasGoodEnd = false;
    return "Invalid email: email address should end with .com, .edu, .net, or .org"
  }
  
  if(hasSymbol && hasGoodEnd && nameBeforeSymbol){
    return 'Valid email';
  }
  return 'Invalid email';

};

const getInitials = (name) => {
  // insert code
  var initials = ""; 
  if (name.indexOf(" ") == -1){
    initials = name.substring(0,2);
    return initials;
  }
  var splitString = name.split(" ");
  for(var i = 0; i < splitString.length; i++){
    var string = splitString[i];
    initials+= string.charAt(0);
    
  }
 return initials;
};

const getInitialsOneName = (name) => {
  // insert code
};

const getInitialsLongName = (name) => {
  // insert code
};

const howRepetitiveAreYou = (lyrics, word) => {
  // insert code
};

const translateThis = (titles) => {
  const spanishToEnglish = SPANISH_TO_ENGLISH;
  // insert code
};

const getSingles = (trackList = TRACK_LIST) => {
  // insert code
};

const getUniqueArtists = (trackList = TRACK_LIST) => {
  // insert code
};

const getMostStreamedTrack = (trackList = TRACK_LIST) => {
  // insert code
};

module.exports = {
  newSingle,
  eresBadBunny,
  areYouLil,
  mostViewsThreeVideos,
  mostViews,
  validateEmail,
  validateEmailWithMessage,
  getInitials,
  getInitialsOneName,
  getInitialsLongName,
  howRepetitiveAreYou,
  translateThis,
  getSingles,
  getUniqueArtists,
  getMostStreamedTrack
};
