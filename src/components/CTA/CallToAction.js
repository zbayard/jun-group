import './CallToAction.css';

const CallToAction = ()=>{

    const link = 'https://www.tacobell.com/food/cravings-value-menu?gclsrc=aw.ds&gclid=CjwKCAiAm7OMBhAQEiwArvGi3BCGRKRSqx-eL0YszoXdeOYMfHc4ir354g9d86THvfZ7yh9OUMi7pBoC6YkQAvD_BwE'
    return(
        <div className='cta'>
            <div className="btn-box">
                <a href={link} className="btn btn-color btn-animated">See cravings menu!</a>
            </div>
        </div>
    );
};
export default CallToAction;