export type BlogPost = {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  author: {
    name: string
    avatar: string
    role: string
  }
  image: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "essential-first-aid-skills",
    title: "5 Essential First Aid Skills Everyone Should Know",
    excerpt: "Learn the basic first aid techniques that could help you save a life in an emergency situation.",
    content: `
      <p>When an emergency strikes, knowing what to do in the first few minutes can make all the difference. These five essential first aid skills are simple enough for anyone to learn, yet powerful enough to save a life.</p>
      
      <h2>1. CPR (Cardiopulmonary Resuscitation)</h2>
      <p>CPR is perhaps the most critical life-saving skill. When someone's heart stops beating, immediate CPR can double or even triple their chances of survival. The basic steps include:</p>
      <ul>
        <li>Check for responsiveness and call for emergency help</li>
        <li>Begin chest compressions at a rate of 100-120 per minute</li>
        <li>Push hard and fast in the center of the chest, allowing full chest recoil between compressions</li>
        <li>If trained, provide rescue breaths at a ratio of 30 compressions to 2 breaths</li>
      </ul>
      <p>Remember, even hands-only CPR (compression without breaths) is effective and better than no action at all.</p>
      
      <h2>2. Choking Response</h2>
      <p>When someone is choking and cannot breathe, speak, or cough forcefully, you need to act quickly:</p>
      <ul>
        <li>Stand behind the person and wrap your arms around their waist</li>
        <li>Make a fist with one hand and place it just above their navel</li>
        <li>Grab your fist with your other hand and press into their abdomen with quick, upward thrusts</li>
        <li>Repeat until the object is expelled or emergency services arrive</li>
      </ul>
      
      <h2>3. Bleeding Control</h2>
      <p>Severe bleeding can be life-threatening if not controlled quickly:</p>
      <ul>
        <li>Apply direct pressure to the wound using a clean cloth or bandage</li>
        <li>If blood soaks through, add another layer without removing the first</li>
        <li>If possible, elevate the injured area above the heart</li>
        <li>For severe bleeding that doesn't stop, apply pressure to the appropriate pressure point (such as the brachial artery for arm wounds)</li>
        <li>As a last resort for life-threatening limb bleeding, apply a tourniquet if you have proper training</li>
      </ul>
      
      <h2>4. Recovery Position</h2>
      <p>If someone is unconscious but breathing, placing them in the recovery position helps keep their airway clear:</p>
      <ul>
        <li>Kneel beside the person and position their arm nearest to you at a right angle to their body</li>
        <li>Place their other arm across their chest</li>
        <li>Bend the far knee up at a right angle</li>
        <li>Carefully roll them onto their side by pulling on the bent knee</li>
        <li>Tilt their head back slightly to keep the airway open</li>
        <li>Check regularly that they're still breathing while waiting for help</li>
      </ul>
      
      <h2>5. Recognizing and Responding to a Stroke</h2>
      <p>Time is critical when someone is having a stroke. Remember the acronym FAST:</p>
      <ul>
        <li><strong>F</strong>ace: Ask the person to smile. Does one side of their face droop?</li>
        <li><strong>A</strong>rms: Ask them to raise both arms. Does one arm drift downward?</li>
        <li><strong>S</strong>peech: Ask them to repeat a simple phrase. Is their speech slurred or strange?</li>
        <li><strong>T</strong>ime: If you observe any of these signs, call emergency services immediately.</li>
      </ul>
      
      <p>Learning these five basic skills can empower you to act confidently in an emergency. Consider taking a certified first aid course to practice these techniques hands-on and learn additional life-saving skills.</p>
      
      <p>Remember, in any emergency situation, your first step should always be to ensure the scene is safe for you to help, and to call for emergency medical assistance as quickly as possible.</p>
    `,
    date: "May 15, 2024",
    readTime: "5 min read",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Emergency Medicine Physician",
    },
    image: "/placeholder.svg?height=400&width=600",
    tags: ["First Aid", "Emergency Response", "Health", "Safety"],
  },
  {
    id: "family-disaster-preparedness",
    title: "How to Prepare Your Family for Natural Disasters",
    excerpt: "Create a comprehensive emergency plan to keep your loved ones safe during unexpected events.",
    content: `
      <p>Natural disasters can strike with little warning, leaving families vulnerable if they haven't prepared in advance. Creating a comprehensive emergency plan is essential for keeping your loved ones safe during unexpected events. This guide will help you develop a family disaster preparedness plan that addresses the most critical aspects of emergency readiness.</p>
      
      <h2>Assess Your Risks</h2>
      <p>Different regions face different natural disaster threats. Identify which disasters are most likely to affect your area:</p>
      <ul>
        <li>Hurricanes or tropical storms</li>
        <li>Tornadoes</li>
        <li>Floods</li>
        <li>Earthquakes</li>
        <li>Wildfires</li>
        <li>Winter storms</li>
        <li>Extreme heat</li>
      </ul>
      <p>Understanding the specific risks you face will help you tailor your preparations appropriately.</p>
      
      <h2>Create a Family Emergency Communication Plan</h2>
      <p>During a disaster, family members may be separated. Establish how you'll communicate and reunite:</p>
      <ul>
        <li>Designate an out-of-area contact person that everyone can call to check in</li>
        <li>Ensure everyone has important phone numbers memorized or written down</li>
        <li>Identify meeting places: one near your home and another outside your neighborhood</li>
        <li>Practice your communication plan regularly with all family members</li>
      </ul>
      
      <h2>Build Emergency Kits</h2>
      <p>Prepare emergency supplies for different situations:</p>
      <h3>Home Emergency Kit</h3>
      <ul>
        <li>Water (one gallon per person per day for at least three days)</li>
        <li>Non-perishable food (at least a three-day supply)</li>
        <li>Battery-powered or hand-crank radio</li>
        <li>Flashlight and extra batteries</li>
        <li>First aid kit</li>
        <li>Whistle to signal for help</li>
        <li>Dust masks, plastic sheeting, and duct tape for sheltering in place</li>
        <li>Moist towelettes, garbage bags, and plastic ties for personal sanitation</li>
        <li>Wrench or pliers to turn off utilities</li>
        <li>Manual can opener</li>
        <li>Local maps</li>
        <li>Cell phone with chargers and a backup battery</li>
      </ul>
      
      <h3>Go-Bag (Evacuation Kit)</h3>
      <p>A smaller, portable version of your emergency kit that you can quickly grab if you need to evacuate:</p>
      <ul>
        <li>Water and non-perishable food</li>
        <li>Important documents in a waterproof container (insurance policies, identification, bank records)</li>
        <li>Cash or traveler's checks</li>
        <li>Sleeping bag or warm blanket for each person</li>
        <li>Complete change of clothing and sturdy shoes</li>
        <li>Personal hygiene items</li>
        <li>Prescription medications and glasses</li>
        <li>Pet supplies if applicable</li>
        <li>Books, games, or activities for children</li>
      </ul>
      
      <h3>Car Emergency Kit</h3>
      <ul>
        <li>Food and water</li>
        <li>Jumper cables</li>
        <li>Flares or reflective triangles</li>
        <li>Ice scraper (in cold climates)</li>
        <li>Cell phone charger</li>
        <li>Cat litter or sand for traction</li>
        <li>Warm clothes, gloves, and hats</li>
        <li>Blankets</li>
        <li>First aid kit</li>
        <li>Small shovel</li>
      </ul>
      
      <h2>Make a Home Evacuation Plan</h2>
      <p>Ensure everyone knows how to safely exit your home in an emergency:</p>
      <ul>
        <li>Draw a floor plan showing all possible exits from each room</li>
        <li>Identify two ways out of each room</li>
        <li>Mark the location of emergency supplies and fire extinguishers</li>
        <li>Designate an outside meeting spot</li>
        <li>Practice your evacuation plan at least twice a year</li>
      </ul>
      
      <h2>Consider Special Needs</h2>
      <p>Tailor your plan to accommodate everyone in your household:</p>
      <ul>
        <li>Infants and young children: Pack formula, diapers, bottles, and comfort items</li>
        <li>Seniors: Plan for medications, mobility aids, and medical equipment</li>
        <li>People with disabilities: Create specific plans for evacuation assistance</li>
        <li>Pets: Prepare carriers, food, water, and vaccination records</li>
      </ul>
      
      <h2>Stay Informed</h2>
      <p>Know how you'll receive emergency alerts and warnings:</p>
      <ul>
        <li>Sign up for your community's warning system</li>
        <li>Have a weather radio with battery backup</li>
        <li>Download emergency alert apps on your smartphone</li>
        <li>Identify trusted sources of information during disasters</li>
      </ul>
      
      <h2>Review and Update Regularly</h2>
      <p>Emergency preparedness is an ongoing process:</p>
      <ul>
        <li>Review your plans every six months</li>
        <li>Update contact information as needed</li>
        <li>Replace stored food and water every six months</li>
        <li>Check batteries in emergency equipment regularly</li>
        <li>Reassess your plans after any life changes (moving, new family members, etc.)</li>
      </ul>
      
      <p>By taking these steps to prepare your family for natural disasters, you'll increase your chances of staying safe during an emergency. Remember that preparation is not just about gathering supplies—it's about creating a mindset of readiness and resilience that will serve your family well in any crisis.</p>
    `,
    date: "April 28, 2024",
    readTime: "7 min read",
    author: {
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Emergency Preparedness Specialist",
    },
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Disaster Preparedness", "Family Safety", "Emergency Planning"],
  },
  {
    id: "psychology-emergency-response",
    title: "The Psychology of Emergency Response: Staying Calm Under Pressure",
    excerpt: "Discover techniques to manage stress and make clear decisions during crisis situations.",
    content: `
      <p>When faced with an emergency, our bodies naturally respond with a surge of stress hormones that can either help us perform at our best or overwhelm our ability to think clearly. Understanding the psychology behind emergency response can help you stay calm under pressure and make better decisions when it matters most.</p>
      
      <h2>The Science of Stress Response</h2>
      <p>During an emergency, your body activates its "fight-or-flight" response:</p>
      <ul>
        <li>Adrenaline and cortisol flood your system</li>
        <li>Heart rate and blood pressure increase</li>
        <li>Blood flow shifts to major muscle groups</li>
        <li>Non-essential functions temporarily slow down</li>
      </ul>
      <p>This physiological response is designed to help you survive immediate threats. However, it can also impair cognitive function, leading to tunnel vision, auditory exclusion (not hearing things around you), and difficulty processing complex information—all of which can hinder effective emergency response.</p>
      
      <h2>Common Psychological Reactions in Emergencies</h2>
      <p>Understanding typical reactions can help you recognize and manage them:</p>
      <h3>Denial</h3>
      <p>Many people's first reaction to an emergency is denial—"This can't be happening." This delay in accepting reality can waste precious response time.</p>
      
      <h3>Panic</h3>
      <p>Overwhelming fear can lead to irrational behavior or freezing in place, neither of which helps resolve the emergency.</p>
      
      <h3>Tunnel Vision</h3>
      <p>Focusing exclusively on one aspect of the emergency while missing other important information or options.</p>
      
      <h3>Paralysis by Analysis</h3>
      <p>Becoming so overwhelmed by options that you can't make any decision at all.</p>
      
      <h2>Techniques for Staying Calm Under Pressure</h2>
      <p>These evidence-based strategies can help you maintain composure during emergencies:</p>
      
      <h3>Tactical Breathing</h3>
      <p>Used by military and emergency personnel worldwide:</p>
      <ol>
        <li>Inhale deeply through your nose for a count of four</li>
        <li>Hold your breath for a count of four</li>
        <li>Exhale completely through your mouth for a count of four</li>
        <li>Hold the empty breath for a count of four</li>
        <li>Repeat 3-5 times</li>
      </ol>
      <p>This technique helps regulate your autonomic nervous system and reduce the intensity of the stress response.</p>
      
      <h3>Mental Rehearsal</h3>
      <p>Regularly visualizing emergency scenarios and your response:</p>
      <ul>
        <li>Imagine specific emergency situations in detail</li>
        <li>Mentally walk through appropriate responses step by step</li>
        <li>Visualize yourself remaining calm and taking effective action</li>
      </ul>
      <p>This practice creates neural pathways that make appropriate responses more automatic during actual emergencies.</p>
      
      <h3>The OODA Loop</h3>
      <p>Developed by military strategist John Boyd, this decision-making process stands for:</p>
      <ul>
        <li><strong>Observe</strong>: Gather information about the situation</li>
        <li><strong>Orient</strong>: Put the information in context and consider options</li>
        <li><strong>Decide</strong>: Choose the best course of action</li>
        <li><strong>Act</strong>: Implement your decision</li>
      </ul>
      <p>Then loop back to observation to assess results and adjust as needed. This structured approach prevents decision paralysis.</p>
      
      <h3>Positive Self-Talk</h3>
      <p>What you say to yourself during an emergency affects your performance:</p>
      <ul>
        <li>Replace "I can't handle this" with "I'm trained for this"</li>
        <li>Focus on specific actions: "Check breathing, call 911, start compressions"</li>
        <li>Use encouraging phrases: "I can do this one step at a time"</li>
      </ul>
      
      <h2>Training Your Brain for Emergencies</h2>
      <p>Like any skill, emergency response improves with practice:</p>
      
      <h3>Stress Inoculation</h3>
      <p>Gradually exposing yourself to controlled stress helps build resilience:</p>
      <ul>
        <li>Take first aid and emergency response courses</li>
        <li>Participate in realistic drills and simulations</li>
        <li>Practice skills under increasingly challenging conditions</li>
      </ul>
      
      <h3>Develop Automatic Responses</h3>
      <p>When basic actions become automatic, your mind is free to address complex aspects of the emergency:</p>
      <ul>
        <li>Practice emergency procedures until they become second nature</li>
        <li>Create and rehearse personal emergency protocols</li>
        <li>Use checklists for complex procedures</li>
      </ul>
      
      <h3>Build General Resilience</h3>
      <p>Overall mental and physical wellness improves emergency performance:</p>
      <ul>
        <li>Maintain physical fitness</li>
        <li>Practice mindfulness or meditation regularly</li>
        <li>Develop healthy stress management techniques for daily life</li>
        <li>Ensure adequate sleep and nutrition</li>
      </ul>
      
      <h2>After the Emergency: Processing the Experience</h2>
      <p>How you handle the aftermath affects your future emergency response capabilities:</p>
      <ul>
        <li>Acknowledge and accept your emotional reactions</li>
        <li>Debrief the experience: what went well and what could improve</li>
        <li>Seek professional support if you experience persistent distress</li>
        <li>Share your experiences to help others learn</li>
      </ul>
      
      <p>By understanding the psychology of emergency response and practicing these techniques, you can train your mind to be your greatest asset rather than a liability during a crisis. Remember that staying calm under pressure is not about having no fear—it's about functioning effectively despite that fear.</p>
    `,
    date: "April 10, 2024",
    readTime: "6 min read",
    author: {
      name: "Dr. Amina Patel",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Crisis Psychology Specialist",
    },
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Psychology", "Emergency Response", "Mental Health", "Stress Management"],
  },
]

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}
