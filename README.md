# Founder-Palace-Take-Home

## How to Run!
1. After downloading the application, navigate to the my-app folder within Powershell.

2. Once there, enter the command `npm start`. From here it should launch on your default browser. 
***NOTE: I used Mozilla FireFox for development so there can be a possibility for different appearances if on a different browser.***

3. Once on, you should be able to freely explore the application where you can view all the characters, toggle the theme, or play around with the random character generator.

## Approach to the Problem!
Given that I have little experience working with React, I ensured to prioritize getting all of the minimum requirements done as soon as possible and focusing on the minor details towards the end. 

I first went about setting up my enviromnent to be able to work with a React application and getting the GitHub repository up quickly to prevent accidental data loss should some unforeseen circumstance occur. 

Once the GitHub repository was up, I cloned it onto my local machine and began the React application building. I had to run various other `npm install`  commands as for some reason the default build does not include the react-router-dom, which I was going to need for later. I then ran a `npm update` to ensure all packages were running in the same version.

After the setup was completed, I then began to look through the API to see how I should go about calling it and creating interfaces to map the properties correctly. Given that the criteria was asking me to look into getting all the characters, I mainly referred to the character documentation where I saw how the types were set up. 

Once I felt I understood the API enough I began to write out the application by first setting up separate folders to specify components, services, and pages. This was going to help me prevent tight coupling for later on as the app becomes more complex.

From here, I then started to rework the defaults that were provided, starting with the App.js that I then switched for a App.tsx. I also started to write out the pages that I thought I would use, those being a Home page and a Characters page. I had also added a Character details page should the time allow for it.

Now that I had gotten started setting up the application, I had gotten navigation completed first as I found that to be fairly straightforward though I ran into my first hurdle here when it came to printing out the API call onto the Characters page. I kept getting an error that my `map` function did not exist and was not allowing the call to appear. I was confused at first as I didn't understand why it was not getting the call as the logic was correct, so my immediate instinct was to see how the data was displaying in console. Sure enough, the data was being retrieved properly so I then knew that the problem had to do with the way I was printing out the data. I then looked into ways to see how I can get this JSON object to print properly where I had managed to find a way to print out the data correctly using the `<li>` hook with a key to a character's id. This ended up paying off significantly as I was finally able to display the character information onto the page.

I then looked into the next criteria of adding a filter by status. Based on the API documentation, there was only 3 states: Alive, Dead, and unknown. I reworked my logic to accomodate for filtering by status and changed my response data from characters to filteredCharacters. This allowed me to be able to apply a status to the call to display only the characters with the specific status that is requested. I also ensured to add a button that toggled each of these states, with a default "all" for when neither is selected. Doing this allowed for me to then implement the status filtering.

Next was to add the sorting based on name or date created. Given that the logic was fairly similar to that of the filtering, I ended up making a copy of what I had written and adjusted the parameters accordingly. Though I had noticed that I was going to need a conditional since this was stating whether the user wishes to sort by either name **or** date created. Thus I ended up creating said conditional and made a way for the user to be able to choose which one they would like to opt for via a button. This also meant however that I needed to change my filteredCharacters, so rather than get rid of it completely I opted to pass it through to my new sortedCharacters which then gets printed out in the return statement. 

After confirming that everything was more or less implemented, I began to refactor my code and including various error checks. Once these were all implemented I then looked into adjusting the styling of the application with some CSS to make it significantly more user friendly. I had also attempted to implement the theme changing feature though I seem to only have it toggle on the Home page and nowhere else. Had I had more time I definetly would try to rework my ThemeContext file. Pagination was something I also attempted to include though this resulted in making 50 duplicates of each of the first 20 characters, to which this did actually lead me to include some additional logic to prevent duplicate characters. 

## Extra Stuff I Added!

I was a bit eager to try to implement an additional feature when I finally got the idea to make a random character generator using the `/character/characterID`. Repurposing the CharacterDetails page that I wanted to use for something, I added logic to generate a random number that will call one of the 826 characters from the API to display. In it, it has all of the standard information you would normally see on the all characters page though it also includes the URL to the character on the API as well as a much larger image of the character to view. I even added an `Again!` button to be able to stay on the same page and play with the feature.

## Closing Note!

Ultimately, I had a lot of fun working on this assignment. I am really grateful to have had the chance to refresh my memory with React and make something that I can be proud of. If you have any questions or run into anyy issues please do not hesitate to reach out to me through my email: <ins>alanbarragan750@gmail.com</ins> . I look forward to hearing from you soon! 
