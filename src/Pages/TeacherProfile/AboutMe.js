


export default function AboutMe ({about}){
    return(
        <>
         <div className="teacher-about-us">
                                <h2 className="about-teacher">About Me</h2>
                                <p className="abt-para">
                                    {about}
                                </p>
                                {/* <p className="abt-para">
                                    The long barrow was built on land previously inhabited in the
                                    Mesolithic period. It consisted of a sub-rectangular earthen
                                    tumulus, estimated to have been 15 metres (50 feet) in length, with
                                    a chamber built from sarsen megaliths on its eastern end. Both
                                    inhumed.
                                </p> */}
                            </div>
        </>
    )
}