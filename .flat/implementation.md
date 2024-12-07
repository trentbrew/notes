# Context

This instagram post is a collection of really intricate UI animations posted by a UX designer. Below is a thread of comments where a developer is asked if these animations are possible to implement. The developer responds with a resounding "no" and lists a few reasons why.

I disagree. This guy strikes me as a backend developer who doesn't have much experience with frontend development. I've seen these animations implemented before and they're not that difficult to do. Sure, they're just a bit time consuming and can be challenging, but in much the same way as a boss fight in a video game. A UX engineer will find these fun to implement and will be able to do so with relative ease. If you're like me, you'd be thrilled about the opportunity to implement these animations.

# Thread

**Comment in question**

Dev right here 🙋I can already tell you: no
,
**Replies**

@clmstn please, explain why

@reneliscorner lots and lots and lots of work to implement. If there was a library that’d be great but it’d need loads of community support to test and support the demanding gpu loads across platforms. Lower end devices would have to disable the animations. Furthermore more complex animations would be a lot heavier over the wire. Making the animations a video would be more expensive to host and heavier to load plus you lose the control of moving individual components in the animation at run time

@clmstn okay, thank you 👌

@clmstn Don't worry Ai will make it soon enough.

@clmstn but who says you're implementing them? These are perfect for my portfolio. Let people enjoy things, don't gatekeep. Any real professional designer who works with a developer would understand to at least advise with them first to see what the best option is.

@clmstn curious to know what you recommend for if you want to add animation to your websites!

@clmstn would it be possible to implement some in the form of css or java_script animations? Like morphing/transforming pngs?

@clmstn if it does, then I’ll have lost my job and I’ll let the designer figure everything out

@ jess.o.grady Did I say you can't? I said that as a dev I wouldn't, I would do that too on my portfolio but I prefer compatibility and accessibility for everyone which is why personally I wouldn't do this

@ jess.o.grady and anyone who works with a developer would be told the same drawbacks as I listed above, if not more drawbacks. It is ultimately up to management if those drawbacks are acceptable

@meshtimes big animations like that put strain on the gpu. As internet devices become more and more interconnected, you’ll see more and more devices with lower end graphics to connect to your website. I would either develop a “second” website that would be shown to lower end devices with these big animations disabled or I would develop websites with smaller animations on the more subtle things such as buttons and other interactive UI elements. Problem with the former approach is that detection at the gpu level requires client side code which means sending that code from the server to the web browser, you can do it at the server level based on device model but that would mean curating a list of devices that can’t run your animations

@clmstn you have no idea of the crypto websites that lag just because of their animations making my ux terrible

@clmstn so then this clearly isn't aimed at professional developers now, don't ya think? 🤭 that was my point. If it works for it's audience, then why complain about uses it isn't intended for? It's as annoying as when designers go "canva isnt a design software!" It is, it just can only do very basic tasks and isn't meant to completely replace software meant for professionals.

@clmstn I think you should improve your development skills 😂

@firmaaanjp i can implement them, don’t worry. But then you’d have all those disadvantages

# My Response

Front-end Developer / UX Designer here. These animations are stunning! These kinds of interactions are so much fun to implement. There are a few options for this: Webflow has timeline based animation which can be limited but they do support LottieFiles. For custom sites the most straightforward way would be to use CSS animations and transitions, but for more complex animations there are JavaScript libraries like GSAP, Framer Motion, and AnimeJS. It's not as difficult as of these folks makes it out to be. In fact, I find it to be quite fun and rewarding to implement these kinds of animations – PLZ never let a developer sacrifices the integrity of a design because they don't want to put in the effort to implement it. I always encourage my clients to dream big and I'll do my best to make it happen, down to the last pixel. I think these animations would be so exciting challenge to implement, and any developer that says it's not worth it is probably not right for the job. Designers shouldn't have to dilute their vision because of a developer's lack of skill or motivation. Just my two cents.

 <!-- will find these fun to implement and will be able to do so with relative ease. If you're like me, you'd be thrilled about the opportunity to implement these animations.  -->
