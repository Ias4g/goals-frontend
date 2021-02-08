import React from 'react';
import { FiInfo } from 'react-icons/fi'
import { Alert } from 'reactstrap';

const NotFoundDatas = (props) => {
    return (
        <div>
            <Alert color="warning">
                <h4 className="alert-heading text-center"><FiInfo size={42} /></h4>
                <p className="text-center">
                    Sinto muito, nenhum registro encontrado...
                </p>
                <hr />
                <p className="mb-0 text-center small">
                    Cadastre metas para aparecerem aqui posteriormente
                </p>
            </Alert>
        </div>
    );
};

export default NotFoundDatas;