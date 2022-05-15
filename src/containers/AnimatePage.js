import React from 'react';
import { motion } from 'framer-motion';

const AnimatePage = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{transition: { duration: 0.2 }, opacity : 0 }}>
            <div className='absolute top-0 left-0 right-0'>
                {props.children}
            </div>

        </motion.div>
    );
}

export default AnimatePage;
