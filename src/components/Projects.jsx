import Cause from './Cause';
import { causes } from '../data/causesData';

export default function Projects() {
    
    return (
        <div className="container-xxl bg-light my-5 py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Be Part of a Project</div>
                    <h1 className="display-6 mb-4">Together, We Build Resilience Through Clean Water and Opportunity</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    {causes.map((cause, index) => (
                        <Cause key={index} {...cause} />
                    ))}
                </div>
            </div>
        </div>
    );
}
