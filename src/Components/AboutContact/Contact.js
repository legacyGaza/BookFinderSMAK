import React from 'react'

const About = () => (
    <div style={{ color: "white", fontSize: "18px" }}>
        <h1> Developers:</h1>
        <label> Mohammed Hourani  </label>
        <label> Ahmed Ibai  </label>
        <label> Sara Dahman  </label>
        <label> Karam Qaoud </label>
        <footer >
            <p>Experiencing a difficulity?</p>
            <p> Feel free to contact us: </p>
            <div>
                <p className="email"><a href="mailto:m.hourani98@gmail.com" style={{ color: "blue" }}>m.hourani98@gmail.com</a></p>
                <p className="email"><a href="mailto:am.ibai.1501@gmail.com" style={{ color: "blue" }}>am.ibai.1501@gmail.com</a></p>
                <p className="email"><a href="mailto:saritadh74@gmail.com" style={{ color: "blue" }}>saritadh74@gmail.com</a></p>
                <p className="email"><a href="mailto:karamqaoud@gmail.com" style={{ color: "blue" }}>karamqaoud@gmail.com</a></p>
            </div>
        </footer>
    </div>
)

export default About;