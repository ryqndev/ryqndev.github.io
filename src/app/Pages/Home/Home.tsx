import clsx from 'clsx';
import { lazily } from 'react-lazily';
import { memo, useMemo, useRef } from 'react';

import PROJECTS from '@assets/projects.json';
import { ScrollableNotice } from '@components/ScrollableNotice/ScrollableNotice';

import { useProjects } from './controller/useProjects';
import { BackgroundText } from './components/BackgroundText/BackgroundText';
import { Curtain } from './components/Curtain/Curtain';
import { PageOverlay } from './components/PageOverlay/PageOverlay';
import { LanguageSelect } from './components/LanguageSelect/LanguageSelect';
import { Timespan } from './components/Timespan/Timespan';
import { ProjectName } from './components/ProjectName/ProjectName';
import { Socials } from './components/Socials/Socials';

import cn from './Home.module.scss';
import { useScroll } from 'app/controller/hooks/useScroll';

const { Stars } = lazily(() => import('@components/Three/Stars'));
const { Content } = lazily(() => import('./components/Content/Content'));

export const Home = memo(function Home() {
    const projectsRef = useRef<HTMLDivElement>(null);
    const y = useScroll();
    const { project, setProject } = useProjects(y, projectsRef);

    const CURTAIN_BREAKPOINT = window.innerHeight * 1.5;
    const BACKGROUND_TEXT_BREAKPOINT = window.innerHeight / 2;

    return (
        <main className={cn.container}>
            <div
                className={clsx(
                    cn.header,
                    y > window.innerHeight && cn.disappear
                )}
            >
                {
                    <Curtain
                        y={y < CURTAIN_BREAKPOINT ? y : CURTAIN_BREAKPOINT}
                    />
                }
            </div>
            <Stars project={project} />
            <BackgroundText visible={y > BACKGROUND_TEXT_BREAKPOINT} />

            <Content project={project} projectsRef={projectsRef}>
                <div className={clsx(cn.controls)}>
                    <PageOverlay
                        visible={y > CURTAIN_BREAKPOINT}
                        pages={PROJECTS}
                        project={project}
                        setProject={setProject}
                    />
                    <LanguageSelect visible={y > CURTAIN_BREAKPOINT} />
                    {PROJECTS?.[project] && (
                        <>
                            <Timespan
                                {...PROJECTS[project].date}
                                visible={y > CURTAIN_BREAKPOINT}
                            />
                            <ProjectName
                                name={PROJECTS[project].displayName}
                                y={y}
                            />
                        </>
                    )}
                    <Socials visible={y > CURTAIN_BREAKPOINT} />
                </div>
            </Content>
            <ScrollableNotice />
        </main>
    );
});
