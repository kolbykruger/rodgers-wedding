<template>
    <div>
        <section class="pageheading">
            <div class="container">
                <h1>Accommodations</h1>
            </div>
        </section>

        <section class="accomodations">
            <div class="container">
                <div class="main-item">
                    <h3>Holiday Inn Express</h3>
                    <div class="add">
                        <address>
                            141 Courtyard Drive<br />
                            Oneonta, NY 13820
                        </address>
                    </div>
                    <div class="phone">
                        <a href="tel:(607) 684-2000">(607) 684-2000</a><br />
                        <p><strong>Group Code: RRW</strong></p>
                    </div>
                    <p class="desc">
                        This is the hotel where there will be bus transportation to and from the wedding venue. When you
                        call you can ask about the Rodgers/Rhind wedding group or RRW. Rooms will be available for
                        Monday (The night before the big day.) and Tuesday Night (The night of the big day!)
                    </p>
                </div>
                <div class="main-item">
                    <center>
                        <p>
                            If you are planning to come the day of the wedding and only stay for that night, make sure
                            to call the hotel a couple days before and let them know you would like to check in early so
                            that you can get ready and get the bus service! As long as you tell them it is for the
                            wedding block, they should be able to accommodate that!
                        </p>
                    </center>
                </div>
                <h2>Other Accommodations</h2>
                <div class="group">
                    <div class="item">
                        <h3>Gilbertsville Village</h3>
                        <p class="sub">5 minute drive</p>
                        <div class="list">
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Quarry Hill Rentals</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info" style="">
                                    <p class=""></p>
                                    <p><span style="font-weight: 400;">Airbnb homes</span></p>
                                    <p></p>

                                    <p class="">
                                        <a
                                            target="_blank"
                                            rel="nofollow norefer"
                                            href="https://www.quarryhillrentals.com"
                                            >Website</a
                                        >
                                    </p>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">The Empire House</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""></p>
                                    <p><span style="font-weight: 400;">8 rooms</span></p>
                                    <p></p>

                                    <p class=""><a href="tel:(607) 783-2859">(607) 783-2859</a></p>

                                    <p class="">
                                        <a href="mailto:theempirehouse@yahoo.com">theempirehouse@yahoo.com</a>
                                    </p>

                                    <address>
                                        32 Marion Ave (HWY 51)<br />
                                        Gilbertsville, NY 13776
                                    </address>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Signature Quilt Bed and Breakfast</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""></p>
                                    <p><span style="font-weight: 400;">1 apartment, sleeps 6</span></p>
                                    <p></p>

                                    <p class="">
                                        <a
                                            target="_blank"
                                            rel="nofollow norefer"
                                            href="https://www.SignatureQuiltBandB.com"
                                            >Website</a
                                        >
                                    </p>

                                    <p class=""><a href="tel:(607) 783-2513">(607) 783-2513</a></p>

                                    <address>
                                        6 Commercial Street<br />
                                        Gilbertsville, NY 13776
                                    </address>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Olde Stone House Bed and Breakfast</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""></p>
                                    <p>3 rooms</p>
                                    <p></p>

                                    <p class=""><a href="tel:(607) 783-2982">(607) 783-2982</a></p>

                                    <p class=""><a href="mailto:klb310@msn.com">klb310@msn.com</a></p>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Elm Street Inn</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""></p>
                                    <p><span style="font-weight: 400;">private house – sleeps 9</span></p>
                                    <p></p>

                                    <p class=""><a href="tel:(607) 237-4365">(607) 237-4365</a></p>

                                    <p class=""><a href="mailto:DLDvoracek@yahoo.com">DLDvoracek@yahoo.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h3>Oneonta, NY</h3>
                        <p class="sub">25 minute drive</p>
                        <div class="list">
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Hampton Inn Oneonta</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""><a href="tel:(607) 433-9000 ">(607) 433-9000 </a></p>

                                    <address>
                                        225 River Street<br />
                                        Oneonta, NY 13820
                                    </address>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Holiday Inn Oneonta/Cooperstown</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""><a href="tel:(607) 433-2250 ">(607) 433-2250 </a></p>

                                    <address>
                                        5206 State Highway 23<br />
                                        Oneonta, NY 13820
                                    </address>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Rainbow Inn</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""><a href="tel:(607) 432-1280">(607) 432-1280</a></p>

                                    <address>
                                        5690 State Highway 7<br />
                                        Oneonta, NY 13820
                                    </address>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Super 8 Oneonta</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""><a href="tel:(607)432-9505">(607)432-9505</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h3>Norwich, NY</h3>
                        <p class="sub">15 minute drive</p>
                        <div class="list">
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Splendor Inn</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""></p>
                                    <p>5 rooms</p>
                                    <p></p>

                                    <p class="">
                                        <a target="_blank" rel="nofollow norefer" href="https://splendorinn.com"
                                            >Website</a
                                        >
                                    </p>

                                    <p class=""><a href="tel:(607) 336-5003">(607) 336-5003</a></p>

                                    <address>
                                        75 South Broad Street<br />
                                        Norwich, NY
                                    </address>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Super 8 Norwich</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""><a href="tel:(607) 336-8880">(607) 336-8880</a></p>

                                    <address>
                                        6067 State Highway 12<br />
                                        Norwich, NY 13815
                                    </address>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Fred’s Inn Restaurant &amp; Lodging</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""></p>
                                    <p>25 rooms</p>
                                    <p></p>

                                    <p class=""><a href="tel:(607) 334-9282">(607) 334-9282</a></p>

                                    <address>
                                        5149 State Highway 12<br />
                                        Norwich, NY 13815
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h3>New Berlin, NY</h3>
                        <p class="sub">20 minute drive</p>
                        <div class="list">
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Remember When Café, Antique Shop &amp; Guest House</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""></p>
                                    <p>3 rooms</p>
                                    <p></p>

                                    <p class=""><a href="tel:(607) 847-9799">(607) 847-9799</a></p>

                                    <address>
                                        34 North Main Street<br />
                                        New Berlin, NY 13411
                                    </address>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">The Preferred Manor</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""></p>
                                    <p>5 rooms</p>
                                    <p></p>

                                    <p class=""><a href="tel:(607) 847-6238 ">(607) 847-6238 </a></p>

                                    <address>
                                        45 South Main Street<br />
                                        New Berlin, NY 13411
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h3>Cooperstown, NY</h3>
                        <p class="sub">45 minute drive (scenic)</p>
                        <div class="list">
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Cooperstown</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class=""></p>
                                    <p>
                                        <span style="font-weight: 400;"
                                            >Cooperstown, NY is a beautiful village, home of the Baseball Hall of Fame
                                            and Ommegang Brewery. There are many inns and bed and breakfasts throughout
                                            the village. You can use
                                            <a href="http://www.ThisIsCooperstown.com"
                                                >www.ThisIsCooperstown.com</a
                                            ></span
                                        ><span style="font-weight: 400;">&nbsp;</span
                                        ><span style="font-weight: 400;">as a resource. </span>
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h3>Vacation Rentals</h3>
                        <p class="sub">
                            There are many local vacation rentals in the surrounding area. These include many private
                            country homes as well as some apartments. Surrounding towns are Gilbertsville, Butternuts,
                            Morris, South New Berlin, New Berlin, Guilford, Norwich.
                        </p>
                        <div class="list">
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Homeaway</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class="">
                                        <a target="_blank" rel="nofollow norefer" href="https://www.Homeaway.com"
                                            >Website</a
                                        >
                                    </p>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">VRBO</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class="">
                                        <a target="_blank" rel="nofollow norefer" href="https://www.VRBO.com"
                                            >Website</a
                                        >
                                    </p>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">Vacation Rentals</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class="">
                                        <a target="_blank" rel="nofollow norefer" href="https://www.VacationRentals.com"
                                            >Website</a
                                        >
                                    </p>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">AirBnB</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class="">
                                        <a target="_blank" rel="nofollow norefer" href="https://www.airbnb.com"
                                            >Website</a
                                        >
                                    </p>
                                </div>
                            </div>
                            <div class="list-item">
                                <button @click="toggleAccordion">
                                    <p class="title">NY Vacation Rentals</p>
                                    <p class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                                                fill="#22282F"
                                            />
                                        </svg>
                                    </p>
                                </button>
                                <div class="list-info">
                                    <p class="">
                                        <a
                                            target="_blank"
                                            rel="nofollow norefer"
                                            href="https://www.nyvacationrentals.com"
                                            >Website</a
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Accomodations',
    methods: {
        toggleAccordion(event) {
            const button = event.currentTarget
            const panel = button.nextElementSibling
            const item = button.parentElement

            item.classList.contains('-expanded') ? item.classList.remove('-expanded') : item.classList.add('-expanded')
            button.classList.contains('-expanded')
                ? button.classList.remove('-expanded')
                : button.classList.add('-expanded')
            panel.classList.contains('-expanded')
                ? panel.classList.remove('-expanded')
                : panel.classList.add('-expanded')
            panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + 16 + 'px'
            panel.setAttribute('aria-expanded', panel.style.maxHeight ? true : false)
            panel.setAttribute('aria-hidden', panel.style.maxHeight ? false : true)
        }
    }
}
</script>
