
    //Contact us form

import React, { useState } from "react";
import { useRouter } from 'next/router';
import FileInput from "./FileInput";


export default function ContactUs(props) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [aboutYou, setAboutYou] = useState("");



  const router = useRouter()

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Submit");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }
    if (firstName.length <= 0) {
      tempErrors["firstName"] = true;
      isValid = false;
    }
    if (lastName.length <= 0) {
      tempErrors["lastName"] = true;
      isValid = false;
    }
    if (portfolioLink.length <= 0) {
      tempErrors["portfolioLink"] = true;
      isValid = false;
    }
    if (aboutYou.length <= 0) {
      tempErrors["aboutYou"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("../api/sendgrid", {
        body: JSON.stringify({
          linkedInProfile: linkedInProfile,
          firstName: firstName,
          lastName: lastName,
          aboutYou: aboutYou,
          portfolioLink: portfolioLink,
          email: email,
          fullname: fullname,
          title: subject,
          message: message,
          phonenumber: phonenumber,
          company: company,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Submit");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        setPhoneNumber("");
        setCompany("");
        setFirstName("");
        setLastName("");
        setLinkedInProfile("");
        setPortfolioLink("");
        setAboutYou("");

        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Submit");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
      setPhoneNumber("");
      setCompany("");
      setFirstName("");
      setLastName("");
      setLinkedInProfile("");
      setPortfolioLink("");
      setAboutYou("");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <>
      <div
        style={{
          display:'flex',
          flexDirection: 'column',
          visibility: router.asPath === "/uxDesigner" ? "visible" : "hidden",
          justifyContent: 'center',
          alignItems: 'center',
          height: router.asPath === "/uxDesigner" ? '113px' : '0px',
          marginTop: router.asPath === "/uxDesigner" ? '118px' : '0px',
        }}
      >
        <p
          style={{
            fontFamily: 'Swansea',
            fontSize: '13px',
            fontWeight: 'bold',
            letterSpacing: '2px',
            color: '#2396b4',
            textTransform: 'uppercase'
          }}
        >
          Send Profile
        </p>
        <h2
          className="H2UXDesigner"
        >
          Apply Position
        </h2>
      </div>
      <div
        className="contactUsForm uxMainContactUsDiv"
        style={{
          backgroundColor: router.asPath === "/uxDesigner" ? '#fff' : '',
          marginTop: router.asPath === "/uxDesigner" ? '28px' : ''
        }}
      >
      <form
            onSubmit={handleSubmit}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              rowGap: '30px'
            }}
          >
            <div
              className="inputDivWrapper"
            >
              <div
                className="contactInputDiv"
              >
                <label
                  htmlFor={router.asPath === "/uxDesigner" ? "firstName" : "fullname"}
                  style={{
                    fontFamily: 'Swansea',
                    marginBottom: '10px'
                  }}
                >
                  { router.asPath === "/uxDesigner" ? "First name" : "Your name"}
                <span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <input
                  type="text"
                  value={router.asPath === "/uxDesigner" ? firstName : fullname}
                  onChange={
                    router.asPath === "/uxDesigner" ?
                    (e) => {setFirstName(e.target.value)}
                    :
                    (e) => {setFullname(e.target.value);}
                  }
                  name={router.asPath === "/uxDesigner" ? "firstName" : "fullname"}
                  className="contactInput"
                  style={{
                    backgroundColor: router.asPath === "/uxDesigner" ? '#fff' : ''
                  }}
                />
                {errors?.fullname && router.asPath !== "/uxDesigner" &&
                  <p className="text-red-500">Full name cannot be empty.</p>
                }
                {errors?.firstName && router.asPath === "/uxDesigner" && 
                  <p className="text-red-500">First name cannot be empty.</p>
                }
              </div>
              <div
                className="contactInputDiv"
              >
                <label
                  htmlFor={router.asPath === "/uxDesigner" ? "lastName" : "email"}
                  style={{
                    fontFamily: 'Swansea',
                    marginBottom: '10px'
                  }}
                >
                  { router.asPath === "/uxDesigner" ? "Last name" : "Email address"}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type={router.asPath === "/uxDesigner" ? "lastName" : "email"}
                  name={router.asPath === "/uxDesigner" ? "lastName" : "email"}
                  value={router.asPath === "/uxDesigner" ? lastName : email}
                  onChange={
                    router.asPath === "/uxDesigner" ?
                    (e) => {setLastName(e.target.value)}
                    :
                    (e) => {setEmail(e.target.value);}
                    
                  }
                  className="contactInput"
                  style={{
                    backgroundColor: router.asPath === "/uxDesigner" ? '#fff' : ''
                  }}
                />

                {errors?.email && router.asPath !== "/uxDesigner" &&
                  <p className="text-red-500">Email cannot be empty.</p>
                }
                {errors?.lastName && router.asPath === "/uxDesigner" && 
                  <p className="text-red-500">Last name cannot be empty.</p>
                }
              </div>
            </div>

            <div
              className="inputDivWrapper"
              style={{
                marginTop: '47px'
              }}
            >
              <div
                className="contactInputDiv"
              >
                <label
                  htmlFor={router.asPath === "/uxDesigner" ? "email" : "phonenumber"}
                  style={{
                    fontFamily: 'Swansea',
                    marginBottom: '10px'
                  }}
                >
                  { router.asPath === "/uxDesigner" ? "Email address" : "Phone number"}
                  {router.asPath === "/uxDesigner" && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={router.asPath === "/uxDesigner" ? "email" : "phonenumber"}
                  name={router.asPath === "/uxDesigner" ? "email" : "phonenumber"}
                  value={router.asPath === "/uxDesigner" ? email : phoneNumber}

                  
                  onChange={router.asPath === "/uxDesigner" ?
                            (e) => {setEmail(e.target.value)}
                            :
                            (e) => {setPhoneNumber(e.target.value);}
                          }
                  className="contactInput"
                  style={{
                    backgroundColor: router.asPath === "/uxDesigner" ? '#fff' : ''
                  }}
                />
                
                {errors?.email && router.asPath === "/uxDesigner" && 
                  <p className="text-red-500">Email address cannot be empty.</p>
                }
              </div>
              <div
                className="contactInputDiv"
              >
                <label
                  htmlFor={router.asPath === "/uxDesigner" ? "phoneNumber" : "company"}
                  className="contactInputDiv"
                  style={{
                    fontFamily: 'Swansea',
                    marginBottom: '10px',
                    maxHeight: router.asPath === "/uxDesigner" ? '12px' : '',
                  }}
                >
                  { router.asPath === "/uxDesigner" ? "Phone number" : "Company"}
                </label>
                <input
                  type={router.asPath === "/uxDesigner" ? "phoneNumber" : "company"}
                  name={router.asPath === "/uxDesigner" ? "phoneNumber" : "company"}
                  value={router.asPath === "/uxDesigner" ? phoneNumber : company}
                  onChange={router.asPath === "/uxDesigner" ?
                            (e) => {setPhoneNumber(e.target.value)}
                            :
                            (e) => {setCompany(e.target.value);}
                          }
                  className="contactInput"
                  style={{
                    backgroundColor: router.asPath === "/uxDesigner" ? '#fff' : ''
                  }}
                />
              </div>
            </div>

            {router.asPath === "/uxDesigner" ? 
            <>
              <div
              className="inputDivWrapper"
              style={{
                marginTop: '47px'
              }}
              >
                <div
                  className="contactInputDiv"
                >
                  <label
                    htmlFor="linkedInProfile"  
                    style={{
                      fontFamily: 'Swansea',
                      marginBottom: '10px'
                    }}
                  >
                    LinkedIn Profile
                  </label>
                  <input
                    type="linkedInProfile"
                    name="linkedInProfile"
                    value={linkedInProfile}
                    onChange={(e) => {
                      setLinkedInProfile(e.target.value);
                    }}
                    className="contactInput"
                    style={{
                      backgroundColor: router.asPath === "/uxDesigner" ? '#fff' : ''
                    }}
                  />
                </div>
                <div
                  className="contactInputDiv"
                >
                  <label
                    htmlFor="portfolioLink"
                    style={{
                      fontFamily: 'Swansea',
                      marginBottom: '10px'
                    }}
                  >
                    Portfolio Link<span className="text-red-500">*</span>
                    
                  </label>
                  <input
                    type="portfolioLink"
                    name="portfolioLink"
                    value={company}
                    onChange={(e) => {
                      setPortfolioLink(e.target.value);
                    }}
                    className="contactInput"
                    style={{
                      backgroundColor: router.asPath === "/uxDesigner" ? '#fff' : ''
                    }}
                  />
                  {errors?.portfolioLink && router.asPath === "/uxDesigner" && 
                    <p className="text-red-500">Portfolio link cannot be empty.</p>
                  }
                </div>
              </div>

              



              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(10,calc((100% - 270px)/10))',
                  gridColumnGap: '30px',
                  padding: '0',
                }}
              >
                <div
                  style={{
                    minWidth: '276px',
                    position: 'relative',

                  }}
                >
                  <FileInput />
                </div>
              </div>
              
            </>
                
            :

            <div
              className="contactInputDiv contactInputTitle"
            >
              <label
                htmlFor="subject"
                style={{
                  fontFamily: 'Swansea',
                  marginBottom: '10px'
                }}
              >
                Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className="contactInput"
                style={{
                  backgroundColor: router.asPath === "/uxDesigner" ? '#fff' : ''
                }}
              />
              {errors?.subject && (
                <p className="text-red-500">Title cannot be empty.</p>
              )}
            </div>
          
          }


            

            <div
              className="contactInputDiv contactInputTitle"
            >
              <label
                htmlFor={router.asPath === "/uxDesigner" ? "aboutYou" : "message"}
                style={{
                  zIndex: '1',
                  fontFamily: 'Swansea',
                  marginBottom: '10px'
                }}
              >
                
                { router.asPath === "/uxDesigner" ? "About you" : "Message"}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                name={router.asPath === "/uxDesigner" ? "aboutYou" : "message"}
                value={router.asPath === "/uxDesigner" ? aboutYou : message}
                onChange={router.asPath === "/uxDesigner" ?
                            (e) => {setAboutYou(e.target.value)}
                            :
                            (e) => {setMessage(e.target.value);}
                          }

                className="contactInput"
                style={{
                  paddingTop: '94px',
                  resize: 'none',
                  backgroundColor: router.asPath === "/uxDesigner" ? '#fff' : '',
                }}
              ></textarea>

              
              {errors?.aboutYou && router.asPath === "/uxDesigner" && 
                <p className="text-red-500">About body cannot be empty.</p>
              }

              {errors?.message && router.asPath !== "/uxDesigner" && 
              <p className="text-red-500">Message body cannot be empty.</p>
              }
            
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                maxWidth: '100%'
              }}
            >
              <button
                className="submitButton"
                type="submit"
                style={{
                  cursor: 'pointer',
                }}
              >
                {buttonText}
              </button>
            </div>
            
            <div className="text-left">
              {showSuccessMessage && (
                <>
                  <p className="text-green-500 font-semibold text-sm my-2">
                    Thank you!
                  </p>
                  <p className="text-green-500 font-semibold text-sm my-2">
                    Your message has been successfully sent.
                  </p>
                  <p className="text-green-500 font-semibold text-sm my-2">
                    We will contact you very soon!
                  </p>
                </>
              )}
              {showFailureMessage && (
                <p className="text-red-500">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </>
     )
}