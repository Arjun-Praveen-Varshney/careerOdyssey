import {
  faArrowUpFromBracket,
  faArrowRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import IconAnalytics from "../assets/icon-analytics.png";
import HeroImage from "../assets/hero-image.png";
import Logo from "../assets/mythyaverse-logo.png";
import Typewriter from "typewriter-effect";
import "./style.css";
import { app } from "../firebaseConfig";
import * as pdfjsLib from "pdfjs-dist";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js";

export default function Home() {
  const [Resume, setResume] = useState("");
  const [JobDescription, setJobDescription] = useState("");
  const [jobDescGenerator, setjobDescGenerator] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [showJobDescriptionForm, setShowJobDescriptionForm] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  const [selectExperienceLevel, setselectExperienceLevel] = useState("");
  let resumepageText = "";
  let jobdescriptionpageText = "";
  const storage = getStorage(app);
  const splittedString =
    "Hello! Your resume is now being analyzed by our sophisticated AI model. This process is meticulous and thorough because we want to provide you with the most accurate and helpful feedback. Just like a human HR expert, our AI is reading through your resume, examining the details of your work experience, education, skills, and more. It's considering the uniqueness of your career journey, the specific roles you've performed, and the distinctive skills you've acquired along the way. In parallel, it's also going through the job description you've provided, understanding the demands and requirements of the role, and the kind of candidate the employer is seeking. Now, it's matching your qualifications with the job's requirements. It's making note of where you're a strong fit and where there might be gaps. And it's not just about matching keywords. The AI understands context, so it's considering factors like whether your experience level aligns with what the job requires, or if your educational background is a match for the role. At the same time, it's preparing comprehensive feedback for you - highlighting your strengths, identifying areas for improvement, and giving you actionable advice on how to make your resume even better. While this may take a minute, we believe in quality over speed. Our aim is to provide you with valuable insights that can truly help you in your job search. Your successful career journey is our ultimate goal. Stay with us for a few more moments. Your personalized resume feedback is on its way!".split(
      " "
    );

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setResume(e.target.files[0]);
    } else if (e.target.name === "job_desc_generator") {
      setjobDescGenerator(e.target.value);
    } else if (e.target.name === "job_description") {
      setJobDescription(e.target.files[0]);
      setisChecked(false);
    } else if (e.target.name === "selectExperienceLevel") {
      setselectExperienceLevel(e.target.value);
    }
  };

  const handleResumeSubmit = (event) => {
    event.preventDefault();
  };

  const handleContinue = () => {
    setShowJobDescriptionForm(true);
  };

  function generateRandomId() {
    const randomPart = Math.random().toString(36).substring(2, 8);
    const timestamp = Date.now();
    const uniqueId = `${timestamp}-${randomPart}`;
    return uniqueId;
  }

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (Resume) {
      setLoading(true);

      try {
        const resumeId = generateRandomId();

        const extractTextFromResume = async () => {
          const storageResumeRef = ref(storage, `${resumeId}/resume`);
          await uploadBytes(storageResumeRef, Resume);
          const downloadedResumeurl = await getDownloadURL(storageResumeRef);

          const resumepdf = await pdfjsLib.getDocument(downloadedResumeurl)
            .promise;
          const numPagesResume = resumepdf.numPages;

          for (let i = 1; i <= numPagesResume; i++) {
            const page = await resumepdf.getPage(i);
            const textContent = await page.getTextContent();
            const extractedResumeText = textContent.items
              .map((item) => item.str)
              .join("");
            resumepageText += extractedResumeText;
            // console.log(`Text content of page ${i}: ${resumepageText}`);
          }
        };

        const extractTextFromJobDescription = async () => {
          const storageJobDescriptionRef = ref(
            storage,
            `${resumeId}/jobdescription`
          );
          await uploadBytes(storageJobDescriptionRef, JobDescription);
          const downloadedJobDescriptionurl = await getDownloadURL(
            storageJobDescriptionRef
          );
          const jobdescriptionpdf = await pdfjsLib.getDocument(
            downloadedJobDescriptionurl
          ).promise;
          const numPagesJobDescription = jobdescriptionpdf.numPages;
          for (let i = 1; i <= numPagesJobDescription; i++) {
            const page = await jobdescriptionpdf.getPage(i);
            const textContent = await page.getTextContent();
            const extractedJobDescriptionText = textContent.items
              .map((item) => item.str)
              .join("");
            jobdescriptionpageText += extractedJobDescriptionText;
            // console.log(`Text content of page ${i}: ${jobdescriptionpageText}`);
          }
        };

        if (JobDescription) {
          await Promise.all([
            extractTextFromResume(),
            extractTextFromJobDescription(),
          ]);
        } else {
          await extractTextFromResume();
        }
        const res1 = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          body: JSON.stringify({
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content:
                  "You are a resume classification assistant. You either reply with 'resume' or 'not resume', to-the-point answers with no elaboration.",
              },
              {
                role: "user",
                content: `Based on the following text, determine if it's a resume or not. \n If it's not a resume, return a message saying 'We think this is not a resume, are you sure you uploaded a resume or a CV?'\n\n${resumepageText}`,
              },
            ],
            temperature: 0,
            max_tokens: 20,
          }),
          headers: {
            Authorization:
              "Bearer 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",
            "Content-Type": "application/json",
          },
        });
        const isResume = await res1.json();
        if (isResume.choices[0].message.content.toLowerCase() === "resume") {
          let personal_info = {};
          const analyzeResume = async () => {
            await fetch("https://api.openai.com/v1/chat/completions", {
              method: "POST",
              body: JSON.stringify({
                model: "gpt-4",
                messages: [
                  {
                    role: "system",
                    content:
                      "You are a personal information extraction assistant. \n Extract the information in a structured JSON format. The JSON structure should be as follows: \n\n {'Name': '', 'Contact Information': {'Email': '', 'Phone': '', 'Address': '', 'LinkedIn': ''}, 'Summary': ''}",
                  },
                  {
                    role: "user",
                    content: `From the following resume, extract the personal information of the candidate in a structured JSON format.\n\n${resumepageText}`,
                  },
                  {
                    role: "assistant",
                    content:
                      '{"Name": "", "Contact Information": {"Email": "null", "Phone": "null", "Address": "null", "LinkedIn": "null"}, "Summary": "null"}',
                  },
                ],
                temperature: 0,
                max_tokens: 1000,
              }),
              headers: {
                Authorization:
                  "Bearer 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",
                "Content-Type": "application/json",
              },
            })
              .then((res) => {
                if (!res.ok) {
                  throw new Error("Network response was not ok");
                }
                res
                  .json()
                  .then((json) => {
                    personal_info = JSON.parse(json.choices[0].message.content);
                  })
                  .catch((err) => {
                    setLoading(false);
                    console.error(err);
                    alert("An error occurred... Please try again!");
                    personal_info = {
                      error:
                        "AI wasn't able to parse the personal info properly.",
                    };
                  });
              })
              .catch((err) => {
                setLoading(false);
                alert("Error: " + err.message);
              });
          };

          const analyzeJobDescriptionFromPDF = async () => {
            await fetch("https://api.openai.com/v1/chat/completions", {
              method: "POST",
              body: JSON.stringify({
                model: "gpt-4",
                max_tokens: 1000,
                temperature: 0.5,
                //   stream: true,
                messages: [
                  {
                    role: "system",
                    content:
                      "You are a career advisor and your task is to first provide a score out of 10 based on how well the resume matches the job description. Then, provide detailed, constructive feedback on the candidate's resume, pointing out the areas where the resume matches the job description and where it falls short. Also, suggest improvements that could make the resume better aligned with the job description. Please provide the score and feedback in a structured JSON format.",
                  },
                  {
                    role: "user",
                    content: `The candidate's resume contains the following information:\n${resumepageText}\nThe job description for the position they're applying for is as follows:\n${jobdescriptionpageText}\nFirst, provide a score out of 10 for how well the resume matches the job description. Then, provide detailed feedback on what's missing and what could be improved in the resume based on this score.`,
                  },
                  {
                    role: "assistant",
                    content:
                      "{'score': 7,'feedback': 'The candidate has a strong background in... However, they could improve their resume by...'}",
                  },
                ],
              }),
              headers: {
                Authorization:
                  "Bearer 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",
                "Content-Type": "application/json",
              },
            })
              .then((res) => {
                if (!res.ok) {
                  throw new Error("Network response was not ok");
                }
                res.json().then((json) => {
                  localStorage.setItem(
                    "careerOdyssey",
                    JSON.stringify({
                      personal_info: personal_info,
                      score: JSON.parse(json.choices[0].message.content),
                    })
                  );
                  setLoading(false);
                  navigate("/analytics");
                });
              })
              .catch((err) => {
                setLoading(false);
                alert("Error: " + err.message);
              });
          };

          const analyzeJobDescriptionFromTextUsingAI = async () => {
            const res4 = await fetch(
              "https://api.openai.com/v1/chat/completions",
              {
                method: "POST",
                body: JSON.stringify({
                  model: "gpt-4",
                  messages: [
                    {
                      role: "system",
                      content:
                        "You are a job description generation assistant. Provide a professional and detailed job description based on the provided job title and experience level. Assume the required skills, responsibilities, and qualifications appropriate for the role.",
                    },
                    {
                      role: "user",
                      content: `Generate a job description for the position of ${jobDescGenerator}. The desired experience level is ${selectExperienceLevel}. Assume the required skills, responsibilities, and qualifications based on the job title and experience level.`,
                    },
                  ],
                  temperature: 0.5,
                  max_tokens: 1000,
                }),
                headers: {
                  Authorization:
                    "Bearer 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",
                  "Content-Type": "application/json",
                },
              }
            );
            const generatedJobDescription = await res4.json();
            await fetch("https://api.openai.com/v1/chat/completions", {
              method: "POST",
              body: JSON.stringify({
                model: "gpt-4",
                max_tokens: 1000,
                temperature: 0.5,
                //   stream: true,
                messages: [
                  {
                    role: "system",
                    content:
                      "You are a career advisor and your task is to first provide a score out of 10 based on how well the resume matches the job description. Then, provide detailed, constructive feedback on the candidate's resume, pointing out the areas where the resume matches the job description and where it falls short. Also, suggest improvements that could make the resume better aligned with the job description. Please provide the score and feedback in a structured JSON format.",
                  },
                  {
                    role: "user",
                    content: `The candidate's resume contains the following information:\n${resumepageText}\nThe job description for the position they're applying for is as follows:\n${generatedJobDescription["choices"][0]["message"]["content"]}\nFirst, provide a score out of 10 for how well the resume matches the job description. Then, provide detailed feedback on what's missing and what could be improved in the resume based on this score.`,
                  },
                  {
                    role: "assistant",
                    content:
                      "{'score': 7,'feedback': 'The candidate has a strong background in... However, they could improve their resume by...'}",
                  },
                ],
              }),
              headers: {
                Authorization:
                  "Bearer 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",
                "Content-Type": "application/json",
              },
            })
              .then((res) => {
                if (!res.ok) {
                  throw new Error("Network response was not ok");
                }
                res.json().then((json) => {
                  localStorage.setItem(
                    "careerOdyssey",
                    JSON.stringify({
                      personal_info: personal_info,
                      score: JSON.parse(json.choices[0].message.content),
                    })
                  );
                  setLoading(false);
                  navigate("/analytics");
                });
              })
              .catch((err) => {
                setLoading(false);
                alert("Error: " + err.message);
              });
          };

          if (JobDescription || jobdescriptionpageText) {
            await Promise.all([
              analyzeResume(),
              analyzeJobDescriptionFromPDF(),
            ]);
          } else if (jobDescGenerator && selectExperienceLevel) {
            await Promise.all([
              analyzeResume(),
              analyzeJobDescriptionFromTextUsingAI(),
            ]);
          } else {
            setLoading(false);
            alert("There is some error with the Job Description.");
          }
        } else {
          setLoading(false);
          alert(
            "We think this is not a resume, are you sure you uploaded a resume or a CV?"
          );
        }
      } catch (error) {
        setLoading(false);
        alert(
          "An error occurred while processing your resume or job description. Please try again!"
        );
      }
    } else {
      alert("Please upload your Resume in PDF format");
    }
  };

  // const handleAnalyze = async (e) => {
  //   e.preventDefault();
  //   if (Resume) {
  //     setLoading(true);

  //     try {
  //       const resumeId = generateRandomId();

  //       const storageResumeRef = ref(storage, `${resumeId}/resume`);
  //       await uploadBytes(storageResumeRef, Resume);
  //       const downloadedResumeurl = await getDownloadURL(storageResumeRef);

  //       const resumepdf = await pdfjsLib.getDocument(downloadedResumeurl)
  //         .promise;
  //       const numPagesResume = resumepdf.numPages;

  //       for (let i = 1; i <= numPagesResume; i++) {
  //         const page = await resumepdf.getPage(i);
  //         const textContent = await page.getTextContent();
  //         resumepageText = textContent.items.map((item) => item.str).join("");
  //         // console.log(`Text content of page ${i}: ${pageText}`);
  //       }

  //       if (JobDescription) {
  //         const storageJobDescriptionRef = ref(
  //           storage,
  //           `${resumeId}/jobdescription`
  //         );
  //         await uploadBytes(storageJobDescriptionRef, JobDescription);
  //         const downloadedJobDescriptionurl = await getDownloadURL(
  //           storageJobDescriptionRef
  //         );
  //         const jobdescriptionpdf = await pdfjsLib.getDocument(
  //           downloadedJobDescriptionurl
  //         ).promise;
  //         const numPagesJobDescription = jobdescriptionpdf.numPages;
  //         for (let i = 1; i <= numPagesJobDescription; i++) {
  //           const page = await jobdescriptionpdf.getPage(i);
  //           const textContent = await page.getTextContent();
  //           jobdescriptionpageText = textContent.items
  //             .map((item) => item.str)
  //             .join("");
  //           // console.log(`Text content of page ${i}: ${pageText}`);
  //         }
  //       }
  //       const res1 = await fetch("https://api.openai.com/v1/chat/completions", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           model: "gpt-4",
  //           messages: [
  //             {
  //               role: "system",
  //               content:
  //                 "You are a resume classification assistant. You either reply with 'resume' or 'not resume', to-the-point answers with no elaboration.",
  //             },
  //             {
  //               role: "user",
  //               content: `Based on the following text, determine if it's a resume or not. \n If it's not a resume, return a message saying 'We think this is not a resume, are you sure you uploaded a resume or a CV?'\n\n${resumepageText}`,
  //             },
  //           ],
  //           temperature: 0,
  //           max_tokens: 20,
  //         }),
  //         headers: {
  //           Authorization:
  //             "Bearer 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",
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const isResume = await res1.json();
  //       if (isResume.choices[0].message.content.toLowerCase() === "resume") {
  //         let personal_info = {};
  //         await fetch("https://api.openai.com/v1/chat/completions", {
  //           method: "POST",
  //           body: JSON.stringify({
  //             model: "gpt-4",
  //             messages: [
  //               {
  //                 role: "system",
  //                 content:
  //                   "You are a personal information extraction assistant. \n Extract the information in a structured JSON format. The JSON structure should be as follows: \n\n {'Name': '', 'Contact Information': {'Email': '', 'Phone': '', 'Address': '', 'LinkedIn': ''}, 'Summary': ''}",
  //               },
  //               {
  //                 role: "user",
  //                 content: `From the following resume, extract the personal information of the candidate in a structured JSON format.\n\n${resumepageText}`,
  //               },
  //               {
  //                 role: "assistant",
  //                 content:
  //                   '{"Name": "", "Contact Information": {"Email": "null", "Phone": "null", "Address": "null", "LinkedIn": "null"}, "Summary": "null"}',
  //               },
  //             ],
  //             temperature: 0,
  //             max_tokens: 1000,
  //           }),
  //           headers: {
  //             Authorization:
  //               "Bearer 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",
  //             "Content-Type": "application/json",
  //           },
  //         })
  //           .then((res) => {
  //             if (!res.ok) {
  //               throw new Error("Network response was not ok");
  //             }
  //             res
  //               .json()
  //               .then((json) => {
  //                 personal_info = JSON.parse(json.choices[0].message.content);
  //               })
  //               .catch((err) => {
  //                 setLoading(false);
  //                 console.error(err);
  //                 alert("An error occurred... Please try again!");
  //                 personal_info = {
  //                   error:
  //                     "AI wasn't able to parse the personal info properly.",
  //                 };
  //               });
  //           })
  //           .catch((err) => {
  //             setLoading(false);
  //             alert("Error: " + err.message);
  //           });
  //         if (JobDescription || jobdescriptionpageText) {
  //           await fetch("https://api.openai.com/v1/chat/completions", {
  //             method: "POST",
  //             body: JSON.stringify({
  //               model: "gpt-4",
  //               max_tokens: 1000,
  //               temperature: 0.5,
  //               //   stream: true,
  //               messages: [
  //                 {
  //                   role: "system",
  //                   content:
  //                     "You are a career advisor and your task is to first provide a score out of 10 based on how well the resume matches the job description. Then, provide detailed, constructive feedback on the candidate's resume, pointing out the areas where the resume matches the job description and where it falls short. Also, suggest improvements that could make the resume better aligned with the job description. Please provide the score and feedback in a structured JSON format.",
  //                 },
  //                 {
  //                   role: "user",
  //                   content: `The candidate's resume contains the following information:\n${resumepageText}\nThe job description for the position they're applying for is as follows:\n${jobdescriptionpageText}\nFirst, provide a score out of 10 for how well the resume matches the job description. Then, provide detailed feedback on what's missing and what could be improved in the resume based on this score.`,
  //                 },
  //                 {
  //                   role: "assistant",
  //                   content:
  //                     "{'score': 7,'feedback': 'The candidate has a strong background in... However, they could improve their resume by...'}",
  //                 },
  //               ],
  //             }),
  //             headers: {
  //               Authorization:
  //                 "Bearer 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",
  //               "Content-Type": "application/json",
  //             },
  //           })
  //             .then((res) => {
  //               if (!res.ok) {
  //                 throw new Error("Network response was not ok");
  //               }
  //               res.json().then((json) => {
  //                 localStorage.setItem(
  //                   "careerOdyssey",
  //                   JSON.stringify({
  //                     personal_info: personal_info,
  //                     score: JSON.parse(json.choices[0].message.content),
  //                   })
  //                 );
  //                 setLoading(false);
  //                 navigate("/analytics");
  //               });
  //             })
  //             .catch((err) => {
  //               setLoading(false);
  //               alert("Error: " + err.message);
  //             });
  //         } else if (jobDescGenerator && selectExperienceLevel) {
  //           const res4 = await fetch(
  //             "https://api.openai.com/v1/chat/completions",
  //             {
  //               method: "POST",
  //               body: JSON.stringify({
  //                 model: "gpt-4",
  //                 messages: [
  //                   {
  //                     role: "system",
  //                     content:
  //                       "You are a job description generation assistant. Provide a professional and detailed job description based on the provided job title and experience level. Assume the required skills, responsibilities, and qualifications appropriate for the role.",
  //                   },
  //                   {
  //                     role: "user",
  //                     content: `Generate a job description for the position of ${jobDescGenerator}. The desired experience level is ${selectExperienceLevel}. Assume the required skills, responsibilities, and qualifications based on the job title and experience level.`,
  //                   },
  //                 ],
  //                 temperature: 0.5,
  //                 max_tokens: 1000,
  //               }),
  //               headers: {
  //                 Authorization:
  //                   "Bearer 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",
  //                 "Content-Type": "application/json",
  //               },
  //             }
  //           );
  //           const generatedJobDescription = await res4.json();
  //           await fetch("https://api.openai.com/v1/chat/completions", {
  //             method: "POST",
  //             body: JSON.stringify({
  //               model: "gpt-4",
  //               max_tokens: 1000,
  //               temperature: 0.5,
  //               //   stream: true,
  //               messages: [
  //                 {
  //                   role: "system",
  //                   content:
  //                     "You are a career advisor and your task is to first provide a score out of 10 based on how well the resume matches the job description. Then, provide detailed, constructive feedback on the candidate's resume, pointing out the areas where the resume matches the job description and where it falls short. Also, suggest improvements that could make the resume better aligned with the job description. Please provide the score and feedback in a structured JSON format.",
  //                 },
  //                 {
  //                   role: "user",
  //                   content: `The candidate's resume contains the following information:\n${resumepageText}\nThe job description for the position they're applying for is as follows:\n${generatedJobDescription["choices"][0]["message"]["content"]}\nFirst, provide a score out of 10 for how well the resume matches the job description. Then, provide detailed feedback on what's missing and what could be improved in the resume based on this score.`,
  //                 },
  //                 {
  //                   role: "assistant",
  //                   content:
  //                     "{'score': 7,'feedback': 'The candidate has a strong background in... However, they could improve their resume by...'}",
  //                 },
  //               ],
  //             }),
  //             headers: {
  //               Authorization:
  //                 "Bearer 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",
  //               "Content-Type": "application/json",
  //             },
  //           })
  //             .then((res) => {
  //               if (!res.ok) {
  //                 throw new Error("Network response was not ok");
  //               }
  //               res.json().then((json) => {
  //                 localStorage.setItem(
  //                   "careerOdyssey",
  //                   JSON.stringify({
  //                     personal_info: personal_info,
  //                     score: JSON.parse(json.choices[0].message.content),
  //                   })
  //                 );
  //                 setLoading(false);
  //                 navigate("/analytics");
  //               });
  //             })
  //             .catch((err) => {
  //               setLoading(false);
  //               alert("Error: " + err.message);
  //             });
  //         } else {
  //           setLoading(false);
  //           alert("There is some error with the Job Description.");
  //         }
  //       } else {
  //         setLoading(false);
  //         alert(
  //           "We think this is not a resume, are you sure you uploaded a resume or a CV?"
  //         );
  //       }
  //     } catch (error) {
  //       setLoading(false);
  //       alert(
  //         "An error occurred while processing your resume or job description. Please try again!"
  //       );
  //     }
  //   } else {
  //     alert("Please upload your Resume in PDF format");
  //   }
  // };

  return (
    <>
      <div className="w-screen h-screen fixed">
        <nav className="border-gray-200 -mt-6">
          <div className="px-10 flex flex-wrap lg:flex-nowrap items-center mx-auto justify-center md:justify-between">
            <div className="flex space-x-5">
              <div
                className="w-full md:w-auto flex -mt-6 md:mt-0 justify-center"
                id="navbar-default"
              >
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  <img src={Logo} alt="logo" className="w-24" />
                </Link>
              </div>
              <Link to="/home" className="hidden md:flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                  CareerOdyssey: A MythyaVerse Expedition
                </span>
              </Link>
            </div>
            <div className="flex text-sm md:text-base font-medium">
              <button
                onClick={() => {
                  navigate("/about");
                }}
                className={`rounded-full py-2 px-4 ${
                  location.pathname === "/about"
                    ? "text-black bg-white"
                    : "text-white"
                } mr-2`}
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate("/about");
                }}
                className={`rounded-full py-2 px-4 ${
                  location.pathname === "/teams"
                    ? "text-black bg-white"
                    : "text-white"
                } mr-2`}
              >
                Teams
              </button>
              <button
                onClick={() => {
                  navigate("/about");
                }}
                className={`rounded-full py-2 px-4 ${
                  location.pathname === "/howtouse"
                    ? "text-black bg-white"
                    : "text-white"
                }`}
              >
                How to use
              </button>
            </div>
          </div>
        </nav>
        <main className="pt-5 lg:pt-10 h-screen flex flex-col items-center justify-center">
          <img
            src={HeroImage}
            alt="statistical vector graphic"
            className="absolute xl:bottom-20 bottom-40 right-0 xl:w-auto w-1/2"
          />
          <h1 className="absolute top-16 lg:top-20 left-10 md:text-2xl lg:text-3xl text-lg text-left font-bold text-white border-l-4 border-l-white pl-4">
            <span className="text-[#29b]">Revolutionize</span> Your Job <br />
            Search with <span className="text-[#29b]">AI-Powered </span>
            <br />
            Resume Insights
          </h1>

          {loading ? (
            <>
              <div className="w-[91%] md:w-[36%] lg:w-[19%] relative lg:-top-10 border-[1px] rounded-full border-gray-400 bg-[#222] lg:h-[40%] h-[44%]">
                <div className="e-loadholder bg-[#222]">
                  <div className="m-loader">
                    <span className="e-text text-sm">
                      <Typewriter
                        options={{
                          strings: splittedString,
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="text-white text-center">
                *It might take about 1.5 minutes
              </div> */}
            </>
          ) : (
            <>
              {showJobDescriptionForm ? (
                <form
                  action=""
                  className="w-[90%] md:w-auto lg:w-2/5 mx-auto text-center relative md:mt-8 lg:mt-0 lg:-top-10 border-[1px] rounded-[3rem] py-6 md:py-8 lg:py-12 px-3 border-gray-400 flex flex-col items-center justify-center"
                  onSubmit={handleAnalyze}
                >
                  {isChecked ? (
                    <div className="w-[90%] md:w-4/5 space-y-8">
                      <FontAwesomeIcon
                        onClick={() => {
                          setisChecked(false);
                        }}
                        icon={faCircleChevronLeft}
                        className="text-white flex h-10 w-10"
                      />
                      <div className="flex md:space-x-5 items-center justify-center md:justify-end flex-wrap md:flex-nowrap">
                        <label
                          htmlFor="dropzone-jg"
                          className="text-white font-semibold"
                        >
                          Enter Job Role
                        </label>
                        <div className="flex flex-col items-center justify-center w-[90%] md:w-2/3 rounded-full cursor-pointer bg-[#171718]">
                          <input
                            required={true}
                            placeholder="Enter Job Role"
                            className="bg-[#171718] text-white py-3 px-4 w-full rounded-full text-center outline-none"
                            onChange={handleChange}
                            id="dropzone-jg"
                            type="text"
                            value={jobDescGenerator}
                            name="job_desc_generator"
                          />
                        </div>
                      </div>
                      <div className="flex md:space-x-5 items-center justify-center md:justify-end flex-wrap md:flex-nowrap">
                        <label
                          htmlFor="selectExperienceLevel"
                          className="text-white font-semibold"
                        >
                          Experience
                        </label>
                        <div className="flex items-center w-[90%] md:w-2/3 justify-center rounded-full cursor-pointer bg-[#171718]">
                          <select
                            required={true}
                            id="selectExperienceLevel"
                            name="selectExperienceLevel"
                            className="bg-[#171718] text-white outline-none mx-3 py-3 rounded-full w-full"
                            value={selectExperienceLevel}
                            onChange={handleChange}
                          >
                            <option value="">-- Select --</option>
                            <option value="Intern/Trainee">
                              Intern/Trainee
                            </option>
                            <option value="Entry-Level">Entry-Level</option>
                            <option value="Junior Level">Junior Level</option>
                            <option value="Mid-Level">Mid-Level</option>
                            <option value="Senior Level">Senior Level</option>
                            <option value="Management Level">
                              Management Level
                            </option>
                          </select>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="bg-white text-black font-semibold text-lg rounded-full mx-auto py-2 px-8 flex items-center justify-center"
                      >
                        Analyze{" "}
                        <img
                          src={IconAnalytics}
                          alt=""
                          className="ml-2 bg-black rounded-full"
                        />
                      </button>
                    </div>
                  ) : (
                    <div className="w-[90%] md:w-4/5 space-y-4 md:space-y-8">
                      <div className="text-white md:text-2xl font-semibold">
                        Add Your Job Description
                      </div>
                      <div>
                        <label
                          htmlFor="dropzone-jd-file"
                          className="flex flex-col items-center justify-center w-full rounded-full cursor-pointer bg-[#171718]"
                        >
                          <div className="flex items-center justify-center p-5">
                            <FontAwesomeIcon
                              icon={faArrowUpFromBracket}
                              className="text-white"
                            />
                            <p className="text-white opacity-50 px-4">
                              {JobDescription
                                ? JobDescription.name
                                : "Drag or upload Job Description (in PDF)"}
                            </p>
                          </div>
                          <input
                            accept=".pdf"
                            onChange={handleChange}
                            id="dropzone-jd-file"
                            type="file"
                            className="hidden"
                            name="job_description"
                          />
                        </label>
                      </div>
                      <button
                        type="submit"
                        className={`bg-white text-black font-semibold text-lg rounded-full mx-auto py-2 px-8 flex items-center justify-center ${
                          !JobDescription ? "hidden" : ""
                        }`}
                      >
                        Analyze{" "}
                        <img
                          src={IconAnalytics}
                          alt=""
                          className="ml-2 bg-black rounded-full"
                        />
                      </button>
                      <div className="flex items-center justify-center">
                        <div className="flex-1 h-[1px] bg-white"></div>
                        <div className="mx-8 text-white">Or</div>
                        <div className="flex-1 h-[1px] bg-white"></div>
                      </div>
                      <div className="flex items-center justify-center space-x-6">
                        <input
                          className="h-6 w-6"
                          id="checkgenerated"
                          name="checkgenerated"
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {
                            setisChecked(true);
                            setJobDescription("");
                          }}
                        />
                        <label
                          htmlFor="checkgenerated"
                          className="text-white text-left md:font-semibold"
                        >
                          Would you like the AI to generate a job description
                          for you?
                        </label>
                      </div>
                    </div>
                  )}
                </form>
              ) : (
                <form
                  action=""
                  className="w-4/5 md:w-auto lg:w-1/3 mx-auto text-center space-y-8 relative lg:-top-10 border-[1px] rounded-[3rem] py-12 md:py-20 border-gray-400 flex flex-col items-center justify-center"
                  onSubmit={handleResumeSubmit}
                >
                  <div className="">
                    <div className="text-4xl text-white mb-4">
                      <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </div>
                    <label
                      htmlFor="dropzone-resume-file"
                      className="flex flex-col items-center justify-center w-full rounded-full cursor-pointer bg-[#171718]"
                      // {...getRSRootProps()}
                    >
                      <div className="flex flex-col items-center justify-center p-5">
                        <p className="text-white md:text-lg opacity-50 px-4">
                          {Resume
                            ? Resume.name
                            : "Drag or upload CV or Resume (in PDF)."}
                        </p>
                      </div>
                      <input
                        accept=".pdf"
                        onChange={handleChange}
                        id="dropzone-resume-file"
                        type="file"
                        className="hidden"
                        name="resume"
                        // {...getRSInputProps()}
                      />
                    </label>
                  </div>
                  <button
                    onClick={handleContinue}
                    type="submit"
                    className={`bg-white text-black font-semibold text-lg rounded-full mx-auto py-2 px-4 flex items-center justify-center ${
                      !Resume ? "invisible" : ""
                    }`}
                  >
                    Continue{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
                  </button>
                </form>
              )}
            </>
          )}
          {!loading && (
            <>
              <div className="flex w-1/5 items-center justify-center py-5 lg:py-0">
                <div
                  className={`w-16 h-2 bg-white mx-2 rounded-full ${
                    showJobDescriptionForm ? "opacity-50" : ""
                  }`}
                  onClick={() => {
                    setShowJobDescriptionForm(false);
                  }}
                ></div>
                <div
                  onClick={() => {
                    setShowJobDescriptionForm(true);
                  }}
                  className={`rounded-full w-16 h-2 bg-white ${
                    !showJobDescriptionForm ? "opacity-50" : ""
                  } mx-2 ${Resume ? "" : "hidden"}`}
                ></div>
              </div>
            </>
          )}
        </main>
      </div>
      <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
      <script src="https://use.fontawesome.com/b5bf1bd49e.js"></script>
    </>
  );
}
