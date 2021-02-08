import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiFillEdit, AiFillCheckCircle } from 'react-icons/ai'
import React, { useState } from 'react';
import { Button, Popover, PopoverBody } from 'reactstrap';

const Popovers = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    function onConclusion(msg) {
        alert(msg)
    }

    return (
        <div>
            <Button
                id="Popover1"
                color="link"
                className="btn-popover"
            >
                <BsThreeDotsVertical />
            </Button>
            <Popover
                className="border-0"
                placement="left"
                isOpen={popoverOpen}
                target="Popover1"
                toggle={toggle}>
                <PopoverBody>
                    <div id="actions">
                        <li>
                            <Button
                                className="actions badge"
                                color="success"

                                onClick={() => {
                                    onConclusion("Falta implementar o código para fazer a conclusão da meta.")
                                }}
                            >
                                <AiFillCheckCircle size={16} /> concluir
                            </Button>
                        </li>
                        <li>
                            <Button
                                className="actions badge"
                                color="warning"
                                onClick={() => {
                                    onConclusion("Falta implementar o código para fazer a atualização da meta na base de dados")
                                }}
                            // {goal.status && goal.status !== "Pendente"}
                            >
                                <AiFillEdit size={16} /> atualizar
                            </Button>
                        </li>
                    </div>
                </PopoverBody>
            </Popover>
        </div>
    );
}

export default Popovers;