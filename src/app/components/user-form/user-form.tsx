"use client";
import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import Rating from '@mui/material/Rating';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./styles.css";


export default function UserForm() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);


  return (
    <div style={{ backgroundColor: "#F8FAFC", height: 544, width: 388, borderRadius: 16, flexDirection: "column", display: "flex", padding: 12, boxSizing: "border-box", alignItems: "center", position: "relative"}}>
      
        {/* tab bar */}
        <div style={{ position: "relative", height: "10%", width: "90%", backgroundColor: "rgb(226, 232, 240)", borderRadius: "8px", flexDirection: "row", display: "flex", padding: 2, boxSizing: "border-box"}}>
        
            {/* animated square */}
            <div
            style={{
                position: "absolute",
                top: 2,
                bottom: 2,
                left: `calc(${(activeTabIndex * 100) / 3}% + 2px)`,
                width: `calc(33.33% - 4px)`,
                backgroundColor: "white",
                borderRadius: "8px",
                transition: "left 0.2s ease-out",
            }}
            />

            {/* tab 1 */}
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px", zIndex: 1, position: "relative" }}
            onClick={() => setActiveTabIndex(0)}>
            <h3 style={{ color: activeTabIndex === 0 ? "black" : "#BBBBBB", fontFamily: "Inter", fontSize: "12px", fontWeight: "bold", textAlign: "center" }}>
                Preferences
            </h3>
            </div>
    
            {/* tab 2 */}
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px", zIndex: 1}}
            onClick={() => setActiveTabIndex(1)}>
            <h3 style={{ color: activeTabIndex === 1 ? "black" : "#BBBBBB", fontFamily: "Inter", fontSize: "12px", fontWeight: "bold", textAlign: "center"}}>
                People
            </h3>
            </div>

            {/* tab 3 */}
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px", zIndex: 1}}
            onClick={() => setActiveTabIndex(2)}
            >
            <h3 style={{ color: activeTabIndex === 2 ? "black" : "#BBBBBB", fontFamily: "Inter", fontSize: "12px", fontWeight: "bold", textAlign: "center" }}>
                Days
            </h3>
            </div>
        </div>

        {/* tab content */}
        <div style={{ display: "flex", width: "90%", height: "76%", marginTop: "2%", padding: "8% 0 8% 0", boxSizing: "border-box", flexDirection: "column", alignItems: "center"}}> 
            {activeTabIndex === 0 && <Preferences />}
            {activeTabIndex === 1 && <People />}
            {activeTabIndex === 2 && <Days />}
        </div>

        {/* apply button */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#0F172A", borderRadius: "8px", height: "6%", width: "46%", position: "absolute", bottom: "4%"}}>
            <p style={{color: "#F8FAFC", fontSize: "14px", fontWeight: 500, textAlign: "center"}}>Apply</p>
        </div>
    </div>
  );
}

function Preferences() {
    const [star, setStar] = useState<number[]>([0, 0, 0, 0, 0]);


    const preferenceList = [
        "Nature and outdoors activities",
        "Musumns, culture & arts",
        "Entertainment",
        "Shopping",
        "Eat and drink",
    ];
    const preferenceRanks = [
        "Light, just a hint",
        "Medium, let me feel it",
        "Solid, definitely there",
        "Full-on, all in!!!",
        "Heavy, I can't miss!",
    ];

    
    return (
        <div style={{ flex: 1, width: "100%", display: "flex", flexDirection: "column"}}>
            {preferenceList.map((preference, index) => (
                <div className="enlarge-on-hover" key={index} style={{ padding: "10px", boxSizing: "content-box", width: "100%", display: "flex", flexDirection: "column", gap: 5}}>
                    <h2 style={{ fontSize: "14px", fontWeight: "normal", color: "#0F172A"}}>{preference}</h2>
                    <div style={{ display: "flex", flexDirection: "row", gap: 50, alignItems: 'center' }}>
                        <Rating
                            value={star[index]}
                            onChange={(event, newValue) => {
                                if (newValue === null) return;
                                const newStars = [...star];
                                newStars[index] = newValue;
                                setStar(newStars);
                            }}
                        />
                        <p style={{ margin: 0, fontSize: "12px", fontWeight: "normal", color: "#60A5FA"}}>{preferenceRanks[star[index]-1]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function People() {
  const [travelTagIndex, setTravelTagIndex] = useState<number>(0);
  const [isTagSelected, setIsTagSelected] = useState<boolean>(false);
  const [adultNumber, setAdultNumber] = useState<number>(0);
  const [childNumber, setChildNumber] = useState<number>(0);
  const [petChecked, setPetChecked] = useState<boolean>(false);
  const travelTags = ["Customize", "Solo", "Partner", "Family", "Group"];

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        margin: 0,
        gap: 16,
        height: "100%",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {/* Travel with */}
      <div className="enlarge-on-hover" style={{display: "flex", flexDirection: "column", gap: 7}}>
        <p style={{ textAlign: "left", color: "#0F172A", fontSize: "14px" }}>Travel with</p>
        <div
          style={{
            backgroundColor: "#0F172A",
            position: "relative",
            height: 32,
            width: 295.59,
            borderRadius: "8px",
            flexDirection: "row",
            display: "flex",
            padding: "3px",
            boxSizing: "border-box",
          }}
        >
          {/* animated square */}
          <div
            style={{
              position: "absolute",
              top: 2,
              bottom: 2,
              left: `calc(${(travelTagIndex * 100) / 5}% + 2px)`,
              width: `calc(20% - 4px)`,
              backgroundColor: "#F8FAFC",
              borderRadius: "8px",
              transition: "left 0.2s ease-out",
            }}
          />
          {travelTags.map((tag, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div
                  style={{
                    height: `calc(100% - 16px)`,
                    width: "1px",
                    backgroundColor:
                      travelTagIndex == index || travelTagIndex == index - 1
                        ? ""
                        : "#F8FAFC",
                    alignSelf: "center",
                    zIndex: 2,
                  }}
                />
              )}
              <div
                key={index}
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  zIndex: 1,
                  position: index === 0 ? "relative" : "static",
                }}
                onClick={() => {setIsTagSelected(true); setTravelTagIndex(index);}}
              >
                <h3
                  style={{
                    color: index == travelTagIndex ? "black" : "#BBBBBB",
                    fontFamily: "Inter",
                    fontSize: "8px",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  {tag}
                </h3>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Adult */}
      <div className="enlarge-on-hover" style={{ display: "flex", flexDirection: "column", width: 295.59, gap: 0, justifyContent: "flex-start", alignItems: "flex-start", position: "relative" }}>
        <p style={{ textAlign: "left", color: "#0F172A", fontSize: "14px", margin: 0}}>Adult</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 32,
            padding: "0px 10px 0px 10px",
            boxSizing: "border-box",
            alignItems: "center",
          }}
        >
          <p
            style={{ margin: 0, color: "#1E40AF", fontSize: "25px", fontWeight: 200}}
            onClick={() => {
              if (adultNumber > 0) setAdultNumber(adultNumber - 1);
            }}
          >
            -
          </p>
          <p style={{ margin: 0, color: "black", fontSize: "12px" }}>
            {adultNumber}
          </p>
          <p
            style={{ margin: 0, color: "#1E40AF", fontSize: "25px", fontWeight: 200}}
            onClick={() => setAdultNumber(adultNumber + 1)}
          >
            +
          </p>
        </div>
        <p style={{ margin: 0, fontSize: "12px", color: "#333333" }}>
          How many adults are on this trip
        </p>
      </div>

      {/* Child */}
      <div
        className="enlarge-on-hover"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          width: 295.59,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        <p
          style={{
            textAlign: "left",
            color: "#0F172A",
            fontSize: "14px",
            margin: 0,
          }}
        >
          Child
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 32,
            padding: "0px 10px 0px 10px",
            boxSizing: "border-box",
            alignItems: "center",
          }}
        >
          <p
            style={{ margin: 0, color: "#1E40AF", fontSize: "25px", fontWeight: 200 }}
            onClick={() => {
              if (childNumber > 0) setChildNumber(childNumber - 1);
            }}
          >
            -
          </p>
          <p style={{ margin: 0, color: "black", fontSize: "12px" }}>
            {childNumber}
          </p>
          <p
            style={{ margin: 0, color: "#1E40AF", fontSize: "25px", fontWeight: 200 }}
            onClick={() => setChildNumber(childNumber + 1)}
          >
            +
          </p>
        </div>
        <p style={{ margin: 0, fontSize: "12px", color: "#333333" }}>
          AI will customize kid-friendly attractions
        </p>
      </div>

      {/* Pet */}
      <div
        className="enlarge-on-hover"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: 295.59,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 170,
            alignItems: "center",
          }}
        >
          <p
            style={{
              textAlign: "left",
              color: "#0F172A",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Pet
          </p>
          {isTagSelected &&
          <Switch
            checked={petChecked}
            onChange={() => setPetChecked(!petChecked)}
          />}
        </div>
        <p style={{ margin: 0, fontSize: "12px", color: "#333333" }}>
          Consider travel convenience for your pet
        </p>
      </div>
    </div>
  );
}


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
function Days() {
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [calandarValue, setCalendarValue] = useState<Value>(new Date());
    const [travelDays, setTravelDays] = useState<number>(0);

    return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, height: "100%", width: "100%", justifyContent: "flex-start", alignItems: "center"}}>
            <div className="enlarge-on-hover" style={{ display: "flex", flexDirection: "column", gap: 0, width: 295.59, justifyContent: "flex-start", alignItems: "flex-start", position: "relative"}}>
                <p style={{ textAlign: "left", color: "#0F172A", fontSize: "14px", margin: 0}}>Travel for</p>
                {!showCalendar &&
                    <div style={{ display: "flex", flexDirection: "row", gap: 32, padding: "0px 10px 0px 10px", boxSizing: "border-box", alignItems: "center", transition: "opacity 1.0s ease", opacity: showCalendar ? 0 : 1}}>
                        <p style={{ margin: 0, color: "#1E40AF", fontSize: "25px", fontWeight: 200 }}
                            onClick={() => { if (travelDays > 0) setTravelDays(travelDays - 1);}}>-</p>
                        <p style={{ margin: 0, color: "black", fontSize: "12px" }}>{travelDays}</p>
                        <p style={{ margin: 0, color: "#1E40AF", fontSize: "25px", fontWeight: 200 }} onClick={() => setTravelDays(travelDays + 1)}>+</p>
                    </div>}
                <div style={{ display: "flex", flexDirection: "row", gap: 170, alignItems: "center" }}>
                    <p style={{ margin: 0, fontSize: "12px", color: "#333333", whiteSpace: "nowrap" }}>Specific date</p>
                     <Switch checked={showCalendar} onChange={() => setShowCalendar(!showCalendar)}/>
                </div>
            </div>

            {showCalendar && 
                <div style={{ transition: "max-height 1.0s ease-in-out", maxHeight: showCalendar ? "230px" : "0px", width: "100%" }}>
                    <Calendar onChange={setCalendarValue} value={calandarValue}/>
                </div>
            }
        </div>
)}
