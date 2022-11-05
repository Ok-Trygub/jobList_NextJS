import Head from "next/head";

interface MainLayout {
    children: JSX.Element[];
}

const MainLayout = ({children}: MainLayout) => {

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
