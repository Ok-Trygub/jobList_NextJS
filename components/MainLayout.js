import Head from "next/head";

const MainLayout = ({children}) => {

    return (
        <>
            <Head>
                <meta name="keywords" content="test, jobs, task"/>
                <meta name="description" content="Test task Trainee Frontend developer"/>
            </Head>
            {children}
        </>
    );
};

export default MainLayout;
