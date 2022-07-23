/**
 * Generate screenshots from slides
 *
 * @return {slide} slide
*/
function slide() {
  return {
  
    screenshot: function(presentation_id) {
      var presentation = SlidesApp.openById(presentation_id);
      var baseUrl = "https://slides.googleapis.com/v1/presentations/{presentationId}/pages/{pageObjectId}/thumbnail";
      var parameters = {
        method: "GET",
        headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
        contentType: "application/json",
        muteHttpExceptions: true
      };
      
      // Log URL of the main thumbnail of the deck
      // Logger.log(Drive.Files.get(presentation_id).thumbnailLink);
      
      // For storing the screenshot image URLs
      var screenshots = [];
      
      var slides = presentation.getSlides().forEach(function(slide, index) {
       var url = baseUrl
                  .replace("{presentationId}", presentation_id)
                  .replace("{pageObjectId}", slide.getObjectId());
        var response = JSON.parse(UrlFetchApp.fetch(url, parameters));
        
        // Upload Googel Slide image to Google Drive
        var blob = UrlFetchApp.fetch(response.contentUrl).getBlob();
        DriveApp.createFile(blob).setName("Slide " + (index + 1) + ".png");
        
        screenshots.push(response.contentUrl);
      });

      return screenshots;
    }
  }
}