"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

export default function SaveALife() {
  // Quiz States
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizType, setQuizType] = useState<"action" | "reflex" | null>(null)
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])
  const [timeLeft, setTimeLeft] = useState(10)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)

  // Reflex Test States
  const [reflexTestStarted, setReflexTestStarted] = useState(false)
  const [reflexTimeLeft, setReflexTimeLeft] = useState(60)
  const [currentDecision, setCurrentDecision] = useState(0)
  const [reflexScore, setReflexScore] = useState(0)
  const [reflexFeedback, setReflexFeedback] = useState<string[]>([])
  const [reflexCompleted, setReflexCompleted] = useState(false)
  const [reflexScoreCategory, setReflexScoreCategory] = useState("")

  // Timer effect for action quiz
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (quizStarted && quizType === "action" && !quizCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && !quizCompleted && quizType === "action") {
      // Auto-move to next question when time runs out
      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(currentScenario + 1)
        setTimeLeft(10)
      } else {
        setQuizCompleted(true)
      }
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [quizStarted, quizCompleted, timeLeft, currentScenario, quizType])

  // Timer effect for reflex test
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (reflexTestStarted && !reflexCompleted && reflexTimeLeft > 0) {
      timer = setInterval(() => {
        setReflexTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (reflexTimeLeft === 0 && !reflexCompleted && reflexTestStarted) {
      setReflexCompleted(true)
      calculateReflexScore()
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [reflexTestStarted, reflexCompleted, reflexTimeLeft])

  const scenarios = [
    {
      id: 1,
      question: "You're at school. Someone collapses. They're not breathing. What do you do first?",
      options: [
        { id: "a", text: "Run to get a teacher", correct: false },
        { id: "b", text: "Call 911", correct: true },
        { id: "c", text: "Start chest compressions", correct: false },
        { id: "d", text: "Check for a pulse", correct: false },
      ],
    },
    {
      id: 2,
      question: "Your friend is choking during lunch. They can't speak or cough. What's your first action?",
      options: [
        { id: "a", text: "Slap them on the back", correct: false },
        { id: "b", text: "Give them water", correct: false },
        { id: "c", text: "Perform abdominal thrusts (Heimlich maneuver)", correct: true },
        { id: "d", text: "Tell them to try to cough harder", correct: false },
      ],
    },
    {
      id: 3,
      question: "Someone falls and has a deep cut that's bleeding heavily. What should you do?",
      options: [
        { id: "a", text: "Apply direct pressure with a clean cloth", correct: true },
        { id: "b", text: "Run cold water over it", correct: false },
        { id: "c", text: "Apply a tourniquet immediately", correct: false },
        { id: "d", text: "Clean it with soap first", correct: false },
      ],
    },
    {
      id: 4,
      question: "A classmate is having a seizure. What's the best action?",
      options: [
        { id: "a", text: "Hold them down to stop the shaking", correct: false },
        { id: "b", text: "Put something in their mouth", correct: false },
        { id: "c", text: "Clear the area around them and time the seizure", correct: true },
        { id: "d", text: "Try to make them drink water", correct: false },
      ],
    },
    {
      id: 5,
      question: "Someone burned their hand on a hot object. What's your first step?",
      options: [
        { id: "a", text: "Apply ice directly to the burn", correct: false },
        { id: "b", text: "Apply butter or oil to soothe it", correct: false },
        { id: "c", text: "Run cool (not cold) water over it for 10-15 minutes", correct: true },
        { id: "d", text: "Pop any blisters that form", correct: false },
      ],
    },
    {
      id: 6,
      question: "A friend falls and can't move their arm. It looks deformed. What should you do?",
      options: [
        { id: "a", text: "Try to straighten it out", correct: false },
        { id: "b", text: "Immobilize it in the position found and seek medical help", correct: true },
        { id: "c", text: "Apply heat to reduce pain", correct: false },
        { id: "d", text: "Tell them to move it slowly to see what's wrong", correct: false },
      ],
    },
  ]

  // Reflex test scenario
  const reflexScenario = {
    title: "A child is choking at lunch",
    decisions: [
      {
        question:
          "A 7-year-old child suddenly starts clutching their throat and can't speak or cough. What do you do first?",
        options: [
          {
            id: "a",
            text: "Call 911 immediately",
            correct: false,
            feedback: "Emergency services are important, but the child needs immediate help.",
          },
          {
            id: "b",
            text: "Give them water to drink",
            correct: false,
            feedback: "Never give liquids to someone who is choking - it could make things worse.",
          },
          {
            id: "c",
            text: "Perform back blows",
            correct: true,
            feedback: "Good! Back blows are the first step for a choking child.",
          },
          {
            id: "d",
            text: "Ask if they're choking",
            correct: false,
            feedback: "They can't speak - the universal sign of choking is clutching the throat.",
          },
        ],
        timeLimit: 15,
      },
      {
        question: "The back blows didn't dislodge the object. What's your next step?",
        options: [
          {
            id: "a",
            text: "Continue with more back blows",
            correct: false,
            feedback: "If back blows aren't working, you need to try a different technique.",
          },
          {
            id: "b",
            text: "Perform abdominal thrusts (Heimlich maneuver)",
            correct: true,
            feedback: "Correct! Abdominal thrusts are the next step if back blows don't work.",
          },
          {
            id: "c",
            text: "Look in their mouth to remove the object",
            correct: false,
            feedback: "Never put your fingers in the mouth of someone who is choking.",
          },
          {
            id: "d",
            text: "Lay them down on their back",
            correct: false,
            feedback: "Keep them upright for choking first aid.",
          },
        ],
        timeLimit: 15,
      },
      {
        question: "After several abdominal thrusts, the child becomes unconscious. What now?",
        options: [
          {
            id: "a",
            text: "Continue abdominal thrusts",
            correct: false,
            feedback: "The approach changes when someone becomes unconscious.",
          },
          {
            id: "b",
            text: "Call 911 if you haven't already",
            correct: true,
            feedback: "Yes! Now it's critical to get emergency services involved.",
          },
          {
            id: "c",
            text: "Shake them to try to wake them up",
            correct: false,
            feedback: "This won't help and wastes precious time.",
          },
          {
            id: "d",
            text: "Give up - there's nothing more you can do",
            correct: false,
            feedback: "Never give up in an emergency situation.",
          },
        ],
        timeLimit: 15,
      },
      {
        question: "While waiting for emergency services, what should you do?",
        options: [
          {
            id: "a",
            text: "Start CPR",
            correct: true,
            feedback: "Correct! Begin CPR when someone is unconscious and not breathing normally.",
          },
          {
            id: "b",
            text: "Put them in the recovery position",
            correct: false,
            feedback: "Recovery position is for unconscious people who are breathing normally.",
          },
          {
            id: "c",
            text: "Try to make them drink water",
            correct: false,
            feedback: "Never give food or drink to an unconscious person.",
          },
          {
            id: "d",
            text: "Wait and do nothing until help arrives",
            correct: false,
            feedback: "Immediate action is critical for survival.",
          },
        ],
        timeLimit: 15,
      },
    ],
  }

  const startQuiz = (type: "action" | "reflex") => {
    setQuizType(type)
    setQuizStarted(true)

    if (type === "action") {
      setCurrentScenario(0)
      setSelectedAnswers([])
      setTimeLeft(10)
      setQuizCompleted(false)
      setScore(0)
    } else if (type === "reflex") {
      setReflexTestStarted(true)
      setReflexTimeLeft(60)
      setCurrentDecision(0)
      setReflexScore(0)
      setReflexFeedback([])
      setReflexCompleted(false)
    }
  }

  const handleAnswerSelect = (answerId: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentScenario] = answerId
    setSelectedAnswers(newAnswers)

    // Check if answer is correct
    const correctOption = scenarios[currentScenario].options.find((option) => option.correct)
    if (correctOption && correctOption.id === answerId) {
      setScore(score + 1)
    }

    // Move to next scenario or end quiz
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1)
      setTimeLeft(10)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleReflexDecision = (answerId: string) => {
    const currentDecisionData = reflexScenario.decisions[currentDecision]
    const selectedOption = currentDecisionData.options.find((option) => option.id === answerId)

    if (selectedOption) {
      // Add feedback
      setReflexFeedback([...reflexFeedback, selectedOption.feedback])

      // Update score if correct
      if (selectedOption.correct) {
        setReflexScore(reflexScore + 1)
      }

      // Move to next decision or end test
      if (currentDecision < reflexScenario.decisions.length - 1) {
        setCurrentDecision(currentDecision + 1)
      } else {
        calculateReflexScore()
        setReflexCompleted(true)
      }
    }
  }

  const calculateReflexScore = () => {
    const totalPossibleScore = reflexScenario.decisions.length
    const percentageScore = (reflexScore / totalPossibleScore) * 100

    if (percentageScore >= 75) {
      setReflexScoreCategory("Prepared")
    } else if (percentageScore >= 50) {
      setReflexScoreCategory("Halfway There")
    } else {
      setReflexScoreCategory("At Risk")
    }
  }

  const resetQuiz = () => {
    setQuizStarted(false)
    setQuizType(null)
    setReflexTestStarted(false)
    setQuizCompleted(false)
    setReflexCompleted(false)
  }

  return (
    <section id="save-a-life" className="py-20 bg-[#E6544F]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1E1E1E]">
            Can You Save a Life in 60 Seconds?
          </h2>
          <div className="w-20 h-1 bg-[#E6544F] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            In an emergency, every second counts. Would you know what to do when it matters most?
          </p>
        </div>

        {!quizStarted ? (
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm mb-12">
            <h3 className="text-2xl font-bold text-center text-[#E6544F] mb-6">🔴 Interactive Quiz Simulation</h3>
            <p className="text-center text-gray-700 mb-8">
              Put yourself in real-time emergency situations and test your instincts with our rapid-fire scenario-based
              quiz.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-primary">✅ Choose-Your-Action Quiz</h4>
                  <p className="text-gray-700 mb-4">
                    Face 6 life-or-death scenarios with only 10 seconds to decide what to do in each one.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Lifelike emergency situations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>10 seconds to make critical decisions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Test your emergency response knowledge</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => startQuiz("action")}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Start Quiz
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 hover:border-secondary/50 transition-colors">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-primary">🧠 Reflex Test</h4>
                  <p className="text-gray-700 mb-4">
                    You have 60 seconds to save a child who's choking. Can you make the right decisions?
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Real-time emergency simulation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Make critical decisions under pressure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Get instant feedback on your choices</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => startQuiz("reflex")}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  >
                    Start Reflex Test
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center text-gray-600 italic">
              "This is what 60 seconds feels like when someone's life depends on you."
            </div>
          </div>
        ) : quizType === "action" ? (
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm mb-12">
            {!quizCompleted ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm font-medium text-gray-500">
                    Scenario {currentScenario + 1} of {scenarios.length}
                  </div>
                  <div className="flex items-center text-sm font-medium text-red-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{timeLeft} seconds</span>
                  </div>
                </div>

                <Progress value={(timeLeft / 10) * 100} className="h-2 mb-6" indicatorClassName="bg-red-500" />

                <h3 className="text-xl font-semibold mb-6 text-primary">{scenarios[currentScenario].question}</h3>

                <RadioGroup className="space-y-4">
                  {scenarios[currentScenario].options.map((option) => (
                    <div key={option.id} className="flex items-start">
                      <RadioGroupItem
                        value={option.id}
                        id={option.id}
                        onClick={() => handleAnswerSelect(option.id)}
                        className="mt-1"
                      />
                      <Label htmlFor={option.id} className="ml-2 text-gray-700">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Quiz Complete!</h3>
                <div className="text-5xl font-bold text-secondary mb-6">
                  {score} / {scenarios.length}
                </div>
                <p className="text-lg mb-4">
                  {score === scenarios.length
                    ? "Amazing! You knew exactly what to do in every scenario."
                    : score >= scenarios.length / 2
                      ? "Good job! You have some life-saving knowledge, but there's still room to learn more."
                      : "This is why training matters. In a real emergency, knowledge saves lives."}
                </p>
                <p className="text-gray-700 italic mb-8">
                  "This is what 60 seconds feels like when someone's life depends on you. Would you know what to do?"
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={resetQuiz} variant="outline" className="border-primary text-primary">
                    Try Again
                  </Button>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white">Learn First Aid Now</Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Reflex Test
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm mb-12">
            {!reflexTestStarted ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#E6544F] mb-6">Can You Save a Life in 60 Seconds?</h3>
                <p className="text-lg mb-8">Imagine someone collapses in front of you—what would you do first?</p>
                <Button
                  onClick={() => setReflexTestStarted(true)}
                  className="bg-[#E6544F] hover:bg-[#E6544F]/90 text-white px-8 py-6 text-lg"
                >
                  Begin the test
                </Button>
              </div>
            ) : !reflexCompleted ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-medium text-gray-500">
                    Decision {currentDecision + 1} of {reflexScenario.decisions.length}
                  </div>
                  <div className="flex items-center text-sm font-medium text-red-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{reflexTimeLeft} seconds remaining</span>
                  </div>
                </div>

                <Progress value={(reflexTimeLeft / 60) * 100} className="h-2 mb-6" indicatorClassName="bg-red-500" />

                <div className="bg-red-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-red-700 mb-2">{reflexScenario.title}</h3>
                </div>

                <h4 className="text-xl font-semibold mb-6 text-primary">
                  {reflexScenario.decisions[currentDecision].question}
                </h4>

                <div className="space-y-4">
                  {reflexScenario.decisions[currentDecision].options.map((option) => (
                    <Button
                      key={option.id}
                      onClick={() => handleReflexDecision(option.id)}
                      className="w-full text-left justify-start p-4 h-auto"
                      variant="outline"
                    >
                      {option.text}
                    </Button>
                  ))}
                </div>

                {reflexFeedback.length > 0 && currentDecision > 0 && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium mb-2">Previous action feedback:</p>
                    <p className="text-gray-700">{reflexFeedback[reflexFeedback.length - 1]}</p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Test Complete</h3>

                <div className="mb-8">
                  <div className="text-3xl font-bold mb-2">
                    Your score: <span className="text-secondary">{reflexScoreCategory}</span>
                  </div>
                  <div className="text-lg mb-4">
                    You got {reflexScore} out of {reflexScenario.decisions.length} decisions right
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg mb-6">
                    <p className="text-gray-700 mb-2">
                      {reflexScoreCategory === "Prepared"
                        ? "You made good decisions under pressure. You could save a life."
                        : reflexScoreCategory === "Halfway There"
                          ? "You hesitated. In real life, seconds matter."
                          : "You made critical mistakes that could cost a life."}
                    </p>
                  </div>
                </div>

                <div className="mb-8 p-6 bg-red-50 rounded-lg">
                  <p className="text-lg italic text-gray-800">
                    "A girl once asked me if a Band-Aid could heal her mom. She didn't need a Band-Aid. She needed
                    someone who knew what to do."
                  </p>
                </div>

                <p className="text-lg font-medium mb-6">
                  What if it were your mom, your teammate, or your sibling? Would you know what to do? It takes less
                  than an hour to learn. Start now.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white">Learn First Aid Now</Button>
                  <Button variant="outline" className="border-primary text-primary">
                    Donate to Equip a School
                  </Button>
                  <Button variant="outline" className="border-primary text-primary">
                    Share This Challenge
                  </Button>
                </div>

                <Button onClick={resetQuiz} className="mt-6" variant="link">
                  Try Another Test
                </Button>
              </div>
            )}
          </div>
        )}

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Common Questions</h3>
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 text-primary">What if I'm afraid of doing CPR wrong?</AccordionTrigger>
              <AccordionContent className="px-6">
                It's better to try CPR than to do nothing. Even if you haven't been trained, you can still perform
                hands-only CPR by pushing hard and fast on the center of the chest. Emergency dispatchers can also guide
                you through the process over the phone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 text-primary">Do I need to give rescue breaths?</AccordionTrigger>
              <AccordionContent className="px-6">
                If you're not trained in CPR, it's recommended to perform hands-only CPR (chest compressions only). If
                you are trained and confident, you can provide rescue breaths at a ratio of 30 compressions to 2
                breaths.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 text-primary">
                Can I get in legal trouble for helping someone?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                Most places have "Good Samaritan" laws that protect people who provide reasonable assistance to those in
                need. These laws are designed to encourage people to help without fear of legal repercussions if
                something goes wrong.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 text-primary">
                How do I know if I'm doing chest compressions correctly?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                For adults, push down at least 2 inches on the center of the chest at a rate of 100-120 compressions per
                minute. A good tip is to compress to the beat of the song "Stayin' Alive" by the Bee Gees, which has the
                right tempo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
