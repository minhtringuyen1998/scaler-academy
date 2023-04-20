import clsx from "clsx";
import React, { ReactElement } from "react";
import "./Modules.scss";
import { AiOutlineDown } from "react-icons/ai";
import { IModule } from "utils/data";
import { convertProcress } from "utils/fnc";
export interface ModuleProps extends IModule {
  index?: number;
  nameModule: string;
  process: string;
  classes?: string;
  handleClick?: (val: any, name: string) => void;
  modulesActive?: string;
}
const Modules = (props: ModuleProps): ReactElement => {
  const {
    index = 0,
    nameModule,
    process,
    lessions,
    handleClick = () => {},
    modulesActive,
  } = props;
  return (
    <>
      <div
        className={clsx(
          "course-module-container",
          nameModule === modulesActive && "active-module"
        )}
        onClick={() =>
          handleClick({ nameModule, process, lessions }, nameModule)
        }
      >
        <div className="left">
          <p>Module - {index + 1}</p>
          <h3>{nameModule}</h3>
        </div>
        <div className="right">
          {convertProcress(process)}
          <div className="down-icon">
            <AiOutlineDown />
          </div>
        </div>
      </div>
      <div className="container-list-lessions dropdown-lession">
        <div className="list-lessions">
          <div className="process">{convertProcress(process)}</div>
          <div className="wrapper-list-lession">
            {lessions &&
              lessions.map((lession: any, i: number) => {
                return (
                  <div className="lession-container" key={`${lession}__${i}`}>
                    <div className="line"></div>
                    <ul className="lession-content">
                      <li className="title-lession">{lession.titleLession}</li>
                      <ul className="units-lession">
                        {lession.listUnit.map((unit: string, i: number) => {
                          return (
                            <li className="unit" key={`${unit}___${i}`}>
                              {unit}
                            </li>
                          );
                        })}
                      </ul>
                    </ul>
                    {i === lessions.length - 1 && <div className="line"></div>}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Modules;
