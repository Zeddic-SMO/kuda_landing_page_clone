import React from "react"
import "./sections.css"
import kuda from "../svg/money.svg"
import imageLeft from "../svg/imageLeft.png"
import imageRight from "../svg/imageTopRight.png"
import spendLeft from "../svg/spendLeft.png"
import spendRight from "../svg/spendRight.png"
import sendLeft from "../svg/sendLeft.png"
import sendRight from "../svg/sendRight.png"
import investImage from "../svg/investImage.png"

// Icons
import icon1 from "../svg/icon1.png"
import icon2 from "../svg/icon2.png"
import icon3 from "../svg/icon3.png"
import icon4 from "../svg/icon4.png"
import icon5 from "../svg/icon5.png"
import help from "../svg/help.svg"

function Sections() {
  return (
    <>
      <div className="mainSections">
        <div className="moneyApp">
          <div className="moneyAppContent">
            <h1>
              The money app <br />
              for Africans.
            </h1>
            <p>
              Save, spend, send and invest money <br /> across borders.
            </p>
            <span>Join Kuda</span>
          </div>
          <div className="moneyAppImg">
            <img src={kuda} alt="kudaMoney" className="kudaMoney" />
          </div>
        </div>
        <div className="save">
          <div className="saveContent">
            <h1>Save</h1>
            <p>
              Putting money away for the future is smart but it takes discipline
              - something humans don’t have in abundance. We’re using technology
              to solve that by automating saving. You set an amount to save and
              the Kuda app takes care of the rest, prompt interest payout
              included.
            </p>
          </div>
          <div className="saveImage">
            <img src={imageLeft} alt="Left" className="imageLeft" />

            <img src={imageRight} alt="Right" className="imageRight" />
          </div>
        </div>
        <div className="spend">
          <div className="spendImageSection">
            <img src={spendLeft} alt="Left" className="spendLeft" />
            <img src={spendRight} alt="spend" className="spendRight" />
          </div>
          <div className="spendContentSection">
            <h1>Spend</h1>
            <p>
              Kuda gives you more than one way to pay easily, including a widely
              accepted debit card issued in partnership with Visa, quick web
              payments direct from your Kuda account, and location-based gift
              cards for shopping and subscriptions.
            </p>
          </div>
        </div>
        <div className="send">
          <div className="sendContent">
            <h1>Send</h1>
            <p>
              From international transfers to on-the-spot payments at market
              stalls, we’ve simplified sending money so you don’t need to think
              too much about it.
            </p>
            <br />
            <p>
              You can find your friends on Kuda and make unlimited instant
              transfers free of charge, send money to local banks without
              breaking a sweat, or fulfil your promises to family across
              borders.
            </p>
          </div>
          <div className="sendImage">
            <img src={sendLeft} alt="Send Left" className="sendLeft" />
            <img src={sendRight} alt="Send Right" className="sendRight" />
          </div>
        </div>
        <div className="invest">
          <div className="investImage">
            <img
              src={investImage}
              alt="Investment icon"
              className="investImg"
            />
            <div className="icons">
              <img src={icon1} alt="icons" className="icon" />
              <img src={icon2} alt="icons" className="icon" />
              <img src={icon3} alt="icons" className="icon" />
              <img src={icon4} alt="icons" className="icon" />
              <img src={icon5} alt="icons" className="icon" />
            </div>
          </div>
          <div className="investContent">
            <h1>Invest</h1>
            <p>
              We’re bringing verified global investment options closer to every
              African with fractional shares on Kuda, giving anyone with a Kuda
              account the opportunity to grow their money wherever they are in
              the world.
            </p>
          </div>
        </div>
        <div className="help">
          <div className="helpContent">
            <h1>We’re always happy to help you.</h1>
            <p>
              You can chat with us on the app, slide into our DMs, tweet, leave
              an Instagram comment, send an email or call. However you choose to
              reach out, there’ll always be a friendly person there to make your
              life easy.
            </p>
            <a href="/">Contact Us &gt; </a>
          </div>
          <div className="helpImage">
            <img src={help} alt="Help icon" className="helpImg" />
          </div>
        </div>
        <div className="money">
          <div className="moneyContent">
            <h1>
              The money app <br />
              for Africans
            </h1>
            <p>Save, Spend, Send and Invest across borders.</p>
            <span>Join Kuda</span>
          </div>
          <div className="moneyImage">
            <img src={kuda} alt="" className="moneyImg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sections
