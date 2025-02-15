/**
 * Copyright (c) Facebook, Inc. and its affiliates. This file is modified by sasigume.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import DocPaginator from '@theme/DocPaginator';
import DocVersionSuggestions from '@theme/DocVersionSuggestions';
import Seo from '@theme/Seo';
import LastUpdated from '@theme/LastUpdated';
import type { Props } from '@theme/DocItem';
import TOC from '@theme/TOC';
import EditThisPage from '@theme/EditThisPage';
import clsx from 'clsx';
import styles from './styles.module.css';
import { MainHeading } from '@theme/Heading';
import { useActivePlugin, useVersions, useActiveVersion } from '@theme/hooks/useDocs';

function DocItem(props: Props): JSX.Element {
  const { content: DocContent } = props;
  const { metadata, frontMatter } = DocContent;
  const {
    image,
    keywords,
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents,
  } = frontMatter;
  const { description, title, editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy } =
    metadata;

  const { pluginId } = useActivePlugin({ failfast: true });
  const versions = useVersions(pluginId);
  const version = useActiveVersion(pluginId);

  // If site is not versioned or only one version is included
  // we don't show the version badge
  // See https://github.com/facebook/docusaurus/issues/3362
  const showVersionBadge = versions.length > 1;

  // We only add a title if:
  // - user asks to hide it with frontmatter
  // - the markdown content does not already contain a top-level h1 heading
  const shouldAddTitle = !hideTitle && typeof DocContent.contentTitle === 'undefined';

  // 2021-6-9 Added utterances
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'sasigume/asobinon');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'comment');
    script.setAttribute('theme', 'github-light');
    script.crossOrigin = 'anonymous';
    script.async = true;

    document.getElementById('comment-system').appendChild(script);
  }, []);

  return (
    <>
      <Seo {...{ title, description, keywords, image }} />

      <div className="row">
        <div
          className={clsx('col', {
            [styles.docItemCol]: !hideTableOfContents,
          })}
        >
          <DocVersionSuggestions />
          <div className={styles.docItemContainer}>
            <article>
              {showVersionBadge && (
                <span className="badge badge--secondary">Version: {version.label}</span>
              )}

              {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
                <div className="margin-vert--lg">
                  <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>

                  <div className={clsx('col', styles.lastUpdated)}>
                    {(lastUpdatedAt || lastUpdatedBy) && (
                      <LastUpdated
                        lastUpdatedAt={lastUpdatedAt}
                        formattedLastUpdatedAt={formattedLastUpdatedAt}
                        lastUpdatedBy={lastUpdatedBy}
                      />
                    )}
                  </div>
                </div>
              )}

              <div className="markdown">
                {/*
                Title can be declared inside md content or declared through frontmatter and added manually
                To make both cases consistent, the added title is added under the same div.markdown block
                See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120
                */}
                {shouldAddTitle && <MainHeading>{title}</MainHeading>}

                <DocContent />
              </div>
            </article>
            <div className="margin-vert--xl">
              <DocPaginator metadata={metadata} />
            </div>
          </div>
          {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
            <footer className="margin-vert--lg">
              <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>

              <div className={clsx('col', styles.lastUpdated)}>
                {(lastUpdatedAt || lastUpdatedBy) && (
                  <LastUpdated
                    lastUpdatedAt={lastUpdatedAt}
                    formattedLastUpdatedAt={formattedLastUpdatedAt}
                    lastUpdatedBy={lastUpdatedBy}
                  />
                )}
              </div>
            </footer>
          )}
        </div>
        {!hideTableOfContents && DocContent.toc && (
          <div className="col col--3">
            <TOC toc={DocContent.toc} />
          </div>
        )}
      </div>
    </>
  );
}

export default DocItem;
