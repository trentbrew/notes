# Context

Rebecca is the Executive Director of Speak MPLS, a community media organization that provides a platform for local artists and creatives to share their work. She is working with Trent, a web developer, to create a TV guide for Speak MPLS's channels. They are using Cablecast, a software platform that provides tools for managing and scheduling television programming.

Nate is the IT manager for Speak MPLS and is working with Trent to set up the API access for the TV guide.

Matthew is a project manager who is overseeing the project and coordinating communication between Rebecca, Trent, and Nate.

Everyone else mentioned in the email threads is part of the Cablecast team, which provides support and guidance on using the Cablecast software.

---

# Rebecca to Cablecast & Trent **thread 1**

I hope this message finds you doing well!

We wanted to ask a question about getting a TV guide from Cablecast.
Do you know if there is a way to create a TV guide for our channels through Cablecast? DO you know of any stations that use Cablecast to display channel schedules?

I found an example with Bric Free Speech HERE, but I see the exported schedule is through Gracenote. I'm familiar with Gracenote, but I was hoping this is something we can do directly from Cablecast.

I found a way to display the schedule on the channels via Cablecast HERE, and an RSS output feed HERE, but not much info about where or how to access the RSS output.

Any help with this would be greatly appreciated.
Thank you!

# Cablecast to Rebecca & Trent **thread 1**

Hello Rebecca,

Your system has the ability to make use of the Cablecast Schedule bulletin from within CablecastCG, which would play on your channel's output when there is nothing scheduled to play out between programs.

I made a short video to help set this up: https://app.screenweave.com/share/clqcozkjx002tpocztzuqtu2u

However, to pull the channel 'guide' out from Cablecast would require an update to either VOD or Live, if not both to have the Internet Channel available which would create a channel guide for what is playing available for the public to see.

Cheers,

Aaron Rigby

# Rebecca to Cablecast & Trent **thread 1**

Hi Aaron,

Yes, we are looking to have a TV guide like THIS, accessible on our website.
Our members have requested a way to see what is airing on the channels, to be viewed on our website.
What is the update you mentioned to be able to do this? Do you have examples of other stations that have this type of TV guide from Cablecast?
Just exploring the possibilities.

Thank you!

# Cablecast to Rebecca & Trent **thread 1**

Hello Rebecca,

In order to have what you're looking for from Cablecast you would need either (or both) a VOD unit and/or Live upgrade or Live unit.

Both of these upgrades would create access to what we call the Internet Channel (https://sales-ui.cablecast.tv/CablecastPublicSite/?site=1) You'll see their schedule to the right side of the feed.
Direct link: https://sales-ui.cablecast.tv/CablecastPublicSite/schedule?site=1

Cheers,

Aaron Rigby

# Rebecca to Cablecast & Trent **thread 1**

Hello!

I wanted to follow up about our conversation related to a TV guide for our channel!
Our web developer Trent is on the chain here, and has some follow-up questions.
The first question is, is API Access included with our current server?
If so, do you have any helpful guides we could take a look at?

Thank you!

# Rebecca to Cablecast & Trent **thread 1**

Hi Cablecast Team,

We appreciate the follow-up call- sorry to have missed you!

Kevin left a message and wanted to walk us through how to access the API and the web schedule in the UI.
Is this something you have guides for online?
If not, Trent our developer is CC'd on this email and would appreciate a guide or call to walk through the details.

Thank you so much.
Looking forward to connecting soon!

# Cablecast to Rebecca & Trent **thread 1**

Hey Rebecca,

You can view the API documentation normally at http://serverURL/CablecastAPI/Help. I am off tomorrow but if you/Trent are able to review that I'd be happy to answer some additional questions. I would say the publicsitedata endpoint would probably be the best to list all the information you'd want to use though it does require setting up the internet channel within Cablecast as well so the information is present.

I was going to reference your server's URL in the above address however when I look at the server configuration I see we have the IP set as Localhost within our Cablecast software but the server is using both NICs currently. This can cause communication issues if our software doesn't reference the correct NIC. We can bind the correct ip address to avoid that but I'm not sure which IP to use, I'm assuming the 2nd from this screenshot.
Screenshot 2024-03-28 at 4.24.58?PM

- Kevin

# Rebecca to Cablecast & Trent **thread 1**

Hi Kevin,

Thanks for the response!
I am going to loop in Nate our IT person in on this to answer your question.

Nate- how would we access the site http://serverURL/CablecastAPI/Help with the way we log into our server?
Does Kevin need additional context from us on how our system is set up to guide us on the API documentation?

# Nate to Rebecca & Cablecast **thread 1**

funny, i got the same address from TRMS after i asked them about it on monday.  for some reason when i asked about what i can do with the API their first question was what are you looking to do with the API....

here is a working link with the api documentation.
https://trms.speakmpls.com/CablecastAPI/Help

---

# Trent to Rebecca & Matthew **thread 2**

Good morning Rebecca,

I hope you're doing well. I wanted to follow up on our conversation last week regarding the TV Guide UI for Speak MPLS.

As we discussed, integrating the custom TV Guide with the cablecast API will be a crucial component of the project. Based on my research I can confirm that access to the API comes with the purchase of the cablecast system and does not cost extra. This integration will ensure a dynamic and user-friendly interface for viewers to easily navigate through the programming schedule. I understand that Nate is the key contact for information and access related to the backend and the Cablecast API.

Could we possibly arrange a call with Nate at your earliest convenience? My aim for this meeting is to discuss the technical details and secure the necessary API access to move forward with the development process. I'm flexible with my schedule and will accommodate whatever time works best for Nate.

I've also been working on some initial mockups and would love to share them with you and Nate during the call.

Looking forward to hearing from you soon

– Trent

# Rebecca to Trent & Matthew **thread 2**

Hi Trent!

Let me know if the email response from Nate and Cablecast was helpful!

Are we meeting today?

# Matthew to Trent & Rebecca **thread 2**

Hi Rebecca –

I don’t know if you two discussed an additional meeting separately, but we had nothing on the calendar for today. If you were thinking the Friday time was recurring, we still need to find a recurring timeslot. My understanding of scheduling these past couple of weeks when we moved away from the recurring meeting on Thursday was that the Friday makeup was a standalone until we could identify a new time.

That said, do the two of you want to commit to that time on a recurring basis?

Thanks!

# Trent to Rebecca & Matthew **thread 2**

Hey Team,

The response from Nate and Cablecast was super helpful! I'm happy to report that I am able to access the API documentation and the endpoint that we need to use for the TV Guide. From here, I can start working on the integration.

Regarding scheduling, I think we considered Tuesday afternoons as a potential recurring time for our meetings. Would that work for both of you? I'm open to other suggestions and would like to find a time that works for Nate as well in case he needs to join our meetings.

Looking forward to our next steps!

– Trent

# Rebecca to Trent & Matthew **thread 2**

Hi Team,

We may need to revisit the recurring time slot. We moved our SPEAK team meeting back to Tuesday afternoons so that won’t work.

I’m open to suggestions!

Trent- So glad it was what you needed.
I’m sure you have a lot to work with now, so let’s plan to meet next the week of April 8th.

What days work best for you?

# Matthew to Trent & Rebecca **thread 2**

Thanks, Rebecca, and agreed. I wanted to extend some flexibility for some time as I know we all have a lot going on. But I think now that we’re flowing, a new time would work for recurring syncs—specifically for you two, and I will join when I can.

Trent, when you’ve sent along your times, I will get a meeting invite over.

Enjoy your weekend, all.

# Trent to Rebecca & Matthew **thread 2**

Hi Team,

I'm flexible with my schedule the week of April 8th and can meet any day that works best for you @[Rebecca Smith]. Anytime after 10am CT would be ideal for me.

Thank you both for your flexability and support. I'm excited to move forward with the project and can't wait to share the progress with you.

Have a great weekend!

– Trent

# Matthew to Trent & Rebecca **thread 2**

Hi Rebecca –

We have a meeting scheduled for Tuesday, April 8th (afternoon), which I’ve also put back down as a recurring meeting biweekly. Let me know if you have any questions.

On this coming Tuesday, we will be presenting the TV guide idea to you in full so we can map out any final development steps.

More soon! Let me know if you have any questions. I’ll be traveling a bit this weekend, starting tomorrow, so I may be slower to respond. But I will get back to you.

Best,
Matthew

# Matthew to Trent **thread 2**

FYI. Let’s use one of the proposal decks/templates in our Canva to create a little presentation outlining just the key points from your proposal to get buy-in from Rebecca. And note, I think my questions around timeline for this are going to be vital in all decision-making, both for Rebecca and beyond.

Let me know if you’d like to sync on Monday prior to the Tuesday meeting.

Best,
Matthew

# Trent to Matthew **thread 2**

Sounds good, Matthew. A sync on Monday or Tuesday afternoon would be great. I'll be sure to have the presentation and initial prototype ready for us to review.

Best,
Trent
