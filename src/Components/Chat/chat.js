import React, { Component } from 'react';
import './chatS.css';
import 'material-icons';

/* اسماء الاشخاص ، صورهم ، الكلام اللي بالشات من الداتا بيس*/
/*تحديد المرسل والمستقبل ورسالة كل منهما  */

class chat extends Component {

    render() {
        const Burger = () => {
            var chat = document.getElementById('chat');
            chat.scrollTop = chat.scrollHeight - chat.clientHeight;
        }
        const Div_Style = {
            paddingTop: "25%", paddingRight: "50px"
        }
        const H1_Style = {
            fontFamily: 'Vidaloka',
            textTransform: "uppercase",
            top: "350px",
            textAlign: " center",
            float: " right",
            right: "70px",
            fontSize: "3rem",
            color: "#eee",
            backgroundColor: "rgb(7, 212, 212)",
            width: "220px",
            borderRadius: "40px"
        }

        return (
            <div style={Div_Style}>
                <div className="center" >
                    <div className="contacts"  >
                        <i class="fas fa-plus" ></i>
                        <h4> Contacts </h4>
                        <div className="contact">
                            <div className="pic rogers"></div>
                            <div className="badge">14</div>
                            <div className="name">Raya Odeh</div>
                            <div className="message">Hello </div>
                        </div>
                        <div className="contact">
                            <div className="pic stark"></div>
                            <div className="name">Farah Diab</div>
                            <div className="message">Hi</div>
                        </div>
                        <div className="contact">
                            <div className="pic banner"></div>
                            <div className="badge">1</div>
                            <div className="name">Azhar Atari</div>
                            <div className="message"> How are you</div>
                        </div>
                        <div className="contact">
                            <div className="pic thor"></div>
                            <div className="name">Hanaa Souss</div>
                            <div className="badge">3</div>
                            <div className="message"> I like this one</div>
                        </div>
                    </div>
                    <div className="chat" >
                        <div className="contact bar">
                            <div className="pic stark"></div>
                            <div className="name">Raya Odeh</div>
                            <div className="seen">Today at 12:56</div>
                        </div>
                        <div className="messages">
                            <div className="time">Today at 11:41</div>
                            <div className="message parker">Hey ! What's up </div>
                            <div className="message stark">fine and you</div>
                            <div className="message parker">Imiss you </div>
                            <div className="message parker">Uh, what is this  problem</div>
                            <div className="message stark"> i dont know</div>
                            <div className="message stark">
                                <div className="typing typing-1"></div>
                                <div className="typing typing-2"></div>
                                <div className="typing typing-3"></div>
                            </div>
                        </div>
                        <div className="input">
                            <i className="fas fa-camera"></i>
                            <i className="far fa-laugh-beam"></i>
                            < input type="text" placeholder="Type your message here!" />
                            <i className="fas fa-microphone"></i>
                        </div>
                    </div>
                </div>


            </div>




        );
    }
}

export default chat;