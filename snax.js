$("#submit").click(function() {
	var foodType = $("#cuisine").val().trim();
	console.log(foodType);	
	// initMap();

	var user_key = "8d0f5498b703b8d5b8676c365da46a51";
	var queryURL = 'https://developers.zomato.com/api/v2.1/search?q=' + foodType;
	$.ajax({
		url: queryURL,
		method: 'POST',
		headers: {
			'user-key': '8d0f5498b703b8d5b8676c365da46a51'
		}
	}).done(function(response){
		console.log(queryURL);
		console.log(response);
		$("#results").append(response);
	})

});



// // $.ajax({
// // 	url: queryURL
// // })

// let zomatoKey = "8d0f5498b703b8d5b8676c365da46a51"        
//     let centerLatitude = 19.06558, centerLongitude = 72.86215 
//     let urlString = "https://developers.zomato.com/api/v2.1/search?&lat=\(centerLatitude)&lon=\(centerLongitude)";
//     let url = NSURL(string: urlString)

//     if url != nil {
//         let request = NSMutableURLRequest(URL: url!)
//         request.HTTPMethod = "GET"
//         request.addValue("application/json", forHTTPHeaderField: "Accept")
//         request.addValue(zomatoKey, forHTTPHeaderField: "user_key")

//         let task = NSURLSession.sharedSession().dataTaskWithRequest(request, completionHandler: {(data, response, error) -> Void in
//             if error == nil {
//                 let httpResponse = response as! NSHTTPURLResponse!

//                 if httpResponse.statusCode == 200 {
//                     do {
//                         if let json = try NSJSONSerialization.JSONObjectWithData(data!, options: NSJSONReadingOptions.MutableContainers) as? NSDictionary {
//                             if let restaurants = json["restaurants"] as? [NSDictionary] {
//                                 for rest in restaurants {
//                                     var searchResult = [String:AnyObject?]()
//                                     let restaurant = rest["restaurant"] as! NSDictionary
//                                     print(restaurant["id"] as? NSString)
//                                     print(restaurant["average_cost_for_two"] as? NSNumber)
//                                     print(restaurant["cuisines"] as? String)
//                                     print(restaurant["url"] as? String)
//                                     print(restaurant["thumb"] as? String)
//                                     if let location = restaurant["location"] as? NSDictionary {
//                                         print(location["address"] as? String)
//                                         print(location["city"] as? String)
//                                         print((location["latitude"] as? NSString).doubleValue)
//                                         print((location["longitude"] as? NSString).doubleValue)
//                                     }
//                                     print(restaurant["menu_url"] as? String)
//                                     print(restaurant["name"] as? String )
//                                     print(restaurant["phone_numbers"] as? String)
//                                     if let user_rating = restaurant["user_rating"] as? NSDictionary {
//                                         print(user_rating["aggregate_rating"] as? NSString)
//                                         print(user_rating["rating_color"] as? String)
//                                         print((user_rating["votes"] as? NSNumber)).doubleValue)
//                                     }
//                                 }
//                             }
//                         }

//                     } catch {
//                         print(error)
//                     }
//                 }
//             }
//         })

//         task.resume()
//     }


// var auth = {
//         consumerKey: 'oAoNjdNdysprKLTuGZdXmQ', 
//         consumerSecret: 'AojATB5YnsrP1Wo9c065_mspCHw',
//         accessToken: 'LqKjy8iARs6SH9sfkLkAvhjt-1fvvY4i',
//         accessTokenSecret: 'Owahgb_0UK1Qv7VgZhk51gTvMuE',
//         serviceProvider: {
//         signatureMethod: "HMAC-SHA1"
//         }
//     };


// var map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });
//       }
// // var xhr = new XMLHttpRequest();
// // xhr.open("POST", "https://api.yelp.com/oauth2/token", true);
// // xhr.send()


// // Zomato API Key
// // 8d0f5498b703b8d5b8676c365da46a51


// // App ID
// // 3s7OJ1NVidEi7Pdy5hcJuQ

// // App Secret
// // QXGQB1TXtFvstH6aFw5Wy2pHRo4csqdSUD0o2vSRVxXOSsPDmg7oij2aLDBlQJt7