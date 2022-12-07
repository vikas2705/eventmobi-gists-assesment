import React from "react";
import Footer from "../footer";
import Header from "../header";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // log the error to an error reporting service
    }

    render() {
        if (this.state.hasError) {
            // Render any custom fallback UI
            return (
                <div className='min-h-screen flex justify-between flex-col'>
                    <Header />
                    <div className='min-h-[70vh]'>
                        <div className='container mx-auto p-4 flex justify-center'>
                            <h1 className='my-6 text-lg font-bold'>
                                Something went wrong. Please reload or go back.
                            </h1>
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        }

        return this.props.children;
    }
}
