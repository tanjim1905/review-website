
const Contact = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center">Have Some Questions?</h1>
            
            <form action="" className="w-50 mx-auto my-5">
            
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label mx-auto">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="type your mail"/>
        </div>
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label mx-auto">Password</label>
            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="type your password"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
            <textarea className="form-control" placeholder="write your message" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <button className="btn btn-warning">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;