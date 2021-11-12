import './MarketingCopy.css';

const MarketingCopy = ()=>{

    const link = 'https://www.tacobell.com/food/cravings-value-menu?gclsrc=aw.ds&gclid=CjwKCAiAm7OMBhAQEiwArvGi3BCGRKRSqx-eL0YszoXdeOYMfHc4ir354g9d86THvfZ7yh9OUMi7pBoC6YkQAvD_BwE'
    return(
        <div className='marketing-copy'>
            <div className='text-box'>
                <h1>INTRODUCING</h1>
                <h1>OUR $1</h1>
                <h1>CRAVINGS MENU!</h1>
            </div>
            <div className="btn-box">
                <a href={link} className="btn btn-color btn-animated">See cravings menu!</a>
            </div>

            {/* <div className='social-icons'> */}
                {/* social icons do not display above 375px width */}
            {/* </div> */}
        </div>
    );
};
export default MarketingCopy;