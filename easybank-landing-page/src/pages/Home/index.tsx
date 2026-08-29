import './styles.scss';
import image from '../../assets/image-mockups.png';
import CustomButton from '../../components/CustomButton';
import useHome from '../../hooks/useHome';
import { Link } from 'react-router-dom';


const Home = () => {
    const {
        onlineBanking,
        simpleBudgeting,
        fastOnborarding,
        openAPI,
        imgMoney,
        imgConfetti,
        imgPlane,
        imgRestaurant
    } = useHome();

    return (
        <main className="container-home">
            <section className="section-next-generation">
                <div className="box-next">
                    <div className="image">
                        <img src={image} />
                    </div>
                    <div className="text">
                        <h2>Next generation digital banking</h2>
                        <p>
                            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                        </p>
                        <CustomButton event={undefined}>
                            Request Invite
                        </CustomButton>
                    </div>
                </div>
            </section>

            <section className="section-why-choose">
                <div className="box">
                    <h2>Why choose Easybank?</h2>
                    <p className="text-apr">
                        We leverage Open Banking to turn your bank account into your financial hub. Control
                        your finances like never before.
                    </p>
                    <ul>
                        <li>
                            <img src={onlineBanking} />
                            <h3>Online Banking</h3>
                            <p>
                                Our modern web and mobile applications allow you to keep track of your finances
                                wherever you are in the world.
                            </p>
                        </li>
                        <li>
                            <img src={simpleBudgeting} />
                            <h3>Simple Budgeting</h3>
                            <p>
                                See exactly where your money goes each month. Receive notifications when you’re
                                close to hitting your limits.
                            </p>
                        </li>
                        <li>
                            <img src={fastOnborarding} />
                            <h3>Fast Onboarding</h3>
                            <p>
                                We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
                            </p>
                        </li>
                        <li>
                            <img src={openAPI} />
                            <h3>Open API</h3>
                            <p>
                                Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="section-articles">
                <div className="box">
                    <h2>Latest Articles</h2>
                    <div className="box-articles">
                        <article>
                            <img src={imgMoney} />
                            <div className="box-text">
                                <p className="author">By Claire Robinson</p>
                                <Link to="#">
                                    Receive money in any currency with no fees
                                </Link>
                                <p className="text-article">
                                    The world is getting smaller and we’re becoming more mobile. So why should you be
                                    forced to only receive money in a single …
                                </p>
                            </div>
                        </article>
                        <article>
                            <img src={imgRestaurant} />
                            <div className="box-text">
                                <p className="author">By Wilson Hutton</p>
                                <Link to="#">
                                    Treat yourself without worrying about money
                                </Link>
                                <p className="text-article">
                                    Our simple budgeting feature allows you to separate out your spending and set
                                    realistic limits each month. That means you …
                                </p>
                            </div>
                        </article>
                        <article>
                            <img src={imgPlane} />
                            <div className="box-text">
                                <p className="author">By Wilson Hutton</p>
                                <Link to="#">
                                    Take your Easybank card wherever you go
                                </Link>
                                <p className="text-article">
                                    We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …
                                </p>
                            </div>
                        </article>
                        <article>
                            <img src={imgConfetti} />
                            <div className="box-text">
                                <p className="author">By Claire Robinson</p>
                                <Link to="#">
                                    Our invite-only Beta accounts are now live!
                                </Link>
                                <p className="text-article">
                                    After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Home;
