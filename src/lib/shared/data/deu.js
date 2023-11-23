const data = {
	goQuizBtn: 'Zur Suche gehen',
	showAnswersBtn: 'Antworten anzeigen',
	nextStepBtn: 'Nächster Schritt',
	endQuizBtn: '',

	features: [
		{
			id: 2,

			title: 'Fotografien und historische Informationen',
			desc: [
				`Tauchen Sie tief in die Geschichte des Ghettos von Mensk ein mit unseren einzigartigen Quizfragen, die nicht nur Fragen, sondern auch detaillierte Antworten mit visuellen Darstellungen enthalten`,
				`Dies ist nicht nur ein Quiz, sondern eine Studie über die Vergangenheit mit reichem Inhalt und detaillierten Geschichten.`
			]
		},
		{
			id: 0,

			title: 'Globale Verfügbarkeit',
			desc: [
				`Tauchen Sie in die Geschichte des Minsker Ghettos in Ihrer eigenen Sprache ein.Unser Quiz bietet Fragen und Antworten in mehreren Sprachen, darunter Russisch, Weißrussisch und Englisch.`,
				`Dadurch wird unsere Webanwendung für ein Publikum aus der ganzen Welt zugänglich und schafft einen Bildungsraum, der Menschen verschiedener Kulturen und Nationalitäten miteinander verbindet.`
			]
		},
		{
			id: 1,

			title: 'Verfügbar für alle Arten von Geräten',
			desc: [
				`Gehen Sie das Quiz auf jedem Gerät durch. Die Web-App wurde im Hinblick auf ein adaptives Design entwickelt, um die Zugänglichkeit auf allen Arten von Geräten zu gewährleisten.`,
				`Ob Tablet, Smartphone oder PC - unsere Web-App gewährleistet eine reibungslose und bequeme Interaktion auf allen Geräten.`
			]
		},

		{
			titleid: 3,

			title: 'Ausführliche Erklärung',
			desc: [
				`Dieses Quiz testet nicht nur Ihr Wissen, sondern bietet ein einzigartiges Antwortformat - detaillierte, schrittweise Interpretationen, als ob Sie mit einem erfahrenen Geschichtslehrer über Geschichte diskutieren würden.`,
				`Wir haben versucht, das Quiz interessant zu gestalten und nicht nur trockene Informationen aus Archivmaterial abzufragen.`
			]
		}
	],

	quiz: {
		mainTitle: 'Ein Quiz über die Geschichte des Ghettos von Minsk.',
		steps: [
			{
				id: 1,
				img: `q1.jpg`,
				imgTitle: `Chorsynagoge, Minsk, 1920er Jahre`,
				title: `Wann sind die Juden auf das Territorium von Belarus gekommen?`,
				desc: ``,
				options: [
					{
						text: `Das Ende des 18. Jahrhunderts, nach der Einführung der "Linie der jüdischen Besiedlung" mit dem Zusammenschluss belarussischer Länder zum Russischen Reich.`,
						id: 1,
						answerText: [
							`Nein, du hast es nicht erraten.`,
							`Dies geschah viel früher, im XIV. Jahrhundert. Das erste schriftliche Dokument über ihr Erscheinen im Großherzogtum Litauen ist das Privileg von 1388.`
						]
					},
					{
						text: `14. Jahrhundert während der Zeit von Fürst Vitaut.`,
						id: 2,
						answerText: [
							`Ja.`,
							`Sie haben Recht, das erste schriftliche Dokument über ihr Erscheinen im Großherzogtum Litauen ist das Privileg von 1388.`
						]
					},
					{
						text: `Nach 1917, als Juden aufgrund der ungeklärten Lage in Moskau und Petrograd nach Belarus zogen.`,
						id: 3,
						answerText: [
							`Nein.`,
							`Du hast es nicht erraten. Dies geschah viel früher, im XIV. Jahrhundert. Das erste schriftliche Dokument über ihr Erscheinen im Großherzogtum Litauen ist das Privileg von 1388.`
						]
					}
				]
			},

			{
				id: 2,
				img: `q2.jpg`,
				imgTitle: `Ein Schild auf einem Geschäft in Belarus zu Beginn des 20. Jahrhunderts.`,
				title: `Jiddisch ist die hebräische Sprache der germanischen Gruppe. Seit dem Mittelalter ist es die gesprochene Sprache der europäischen Juden. Es war auch zu Beginn des 20. Jahrhunderts bei den belarussischen Juden weit verbreitet. Wie war die Position der jiddischen Sprache in der Zwischenkriegs-BSSR?`,
				desc: ``,
				options: [
					{
						text: `Die jiddische Sprache wurde verboten, da sie die Politik der Belarusianisierung behinderte.`,
						id: 1,
						answerText: [
							`Falsche Antwort.`,
							`Damals war es eine der vier Staatssprachen des BSSR. 1920 (31. Juli) wurde die Unabhängigkeitserklärung der belarussischen Republik verabschiedet, welche die Gleichheit von Sprachen wie Belarussisch, Russisch, Polnisch und Jiddisch in den Beziehungen zu Organisationen und Regierungsbehörden in Kultur und Bildung vorsah.`
						]
					},
					{
						text: `Die jiddische Sprache wurde nur für die alltägliche Kommunikation von Juden verwendet, die zu dieser Zeit in Belarus lebten.`,
						id: 2,
						answerText: [
							`Nicht ganz richtig.`,
							`Ja, es war zu Beginn des 20. Jahrhunderts die Muttersprache der belarussischen Juden, aber in der BSSR wurde ihr Status erhöht und es wurde eine der vier offiziellen Staatssprachen.`
						]
					},
					{
						text: `Die Zwischenkriegs-BSSR war die einzige Sowjetrepublik, in der Jiddisch eine der vier Staatssprachen wurde.`,
						id: 3,
						answerText: [
							`Richtige Antwort.`,
							`Der Warschauer Schriftsteller Israel-Yeshua Singer (1893 - 1944) schrieb 1926 über Minsk: „Vier Sprachen - Belarussisch, Russisch, Polnisch und Jiddisch - haben mich am Bahnhof getroffen. Sie sahen mich von oben an, von der grauen Wand aus ... Ich traf sie bei jedem Schritt, im Kommissariat jedes Volkes, in jedem Büro - überall."`
						],
						img: `q2_3.jpg`
					}
				]
			},

			{
				id: 3,
				img: `q3.jpg`,
				imgTitle: `Ein Patch mit der Inschrift in deutscher Sprache "Jude", den die deutschen Behörden im Zweiten Weltkrieg gezwungen hatten, Vertreter jüdischer Nationalität zu tragen.`,
				title: `Was ist der Holocaust?`,
				desc: ``,

				options: [
					{
						text: `Die Politik der ethnischen Verfolgung und Ausrottung von 6 Millionen Juden durch die Nazis und ihre Komplizen.`,
						id: 1,
						answerText: [
							`Richtige Antwort.`,
							`Es fand zwischen 1933 und 1945 statt. nach der Machtübernahme von Adolf Hitler und vor dem Ende des Zweiten Weltkriegs. Kann auch Shoah oder Katastrophe genannt werden.`
						]
					},
					{
						text: `Völkermord am belarussischen Volk während des Großen Vaterländischen Krieges.`,
						id: 2,
						answerText: [
							`Es ist falsch.`,
							`Die Definition des Begriffs „Völkermord“ sieht eine Verfolgung aus rassischen, ethnischen oder religiösen Gründen vor, die nicht primär auf Verbrechen gegen Belarussen zurückgeführt werden kann. Der Holocaust bezieht sich auf die Politik der Verfolgung und Ausrottung von 6 Millionen Juden durch die Nazis und ihre Komplizen in den Jahren 1933-1945 - während der Machtübernahme von Adolf Hitler und vor dem Ende des Zweiten Weltkriegs.`
						]
					},
					{
						text: `Tag der Erinnerung an die Opfer des Zweiten Weltkriegs.`,
						id: 3,
						answerText: [
							`Es ist falsch.`,
							`Der Holocaust ist die Politik der Verfolgung und Ausrottung von 6 Millionen Juden durch die Nazis und ihre Komplizen während der Machtübernahme von Adolf Hitler und bis zum Ende des Zweiten Weltkriegs in den Jahren 1933-1945.`
						],
						img: `q3_3.png`
					}
				]
			},

			{
				id: 4,
				img: `q4.jpg`,
				imgTitle: `Umsiedlung von Juden in das Ghetto von Minsk.`,
				title: ` In Minsk wurde das größte Ghetto in Belarus und das zweitgrößte im ehemaligen sowjetischen Raum geschaffen. Wann ist es passiert?`,
				desc: ``,

				options: [
					{
						text: `20. Juli 1941.`,
						id: 1,
						answerText: [
							`Richtige Antwort.`,
							`Am 19. Juli 1941, etwa drei Wochen nach der Eroberung der belarussischen Hauptstadt durch deutsche Truppen, erteilte der Kommandant des Feldkommandantenbüros in Minsk den Befehl, das Ghetto in Minsk zu errichten.`,
							`Das Dokument wurde am 20. Juli veröffentlicht. Danach wurden nur fünf Tage zur Verfügung gestellt, um Juden in das Ghetto umzusiedeln - ein ausgewiesenes Gebiet, hinter dem sie offiziell nur als Teil der Arbeiterkolonnen abreisen konnten.`
						]
					},
					{
						text: `2.-3. März 1942`,
						id: 2,
						answerText: [
							`Falsch, das Ghetto wurde am 20.`,
							`Juli 1941 gegründet. Der 2. bis 3. März 1942 ist ein weiteres tragisches Datum in der Geschichte des Minsker Ghettos. In diesen Tagen fand eines der schrecklichsten Pogrome statt, bei dem etwa fünftausend Gefangene des Ghettos von Minsk starben. An diesem Tag finden jedes Jahr in Minsk Trauerveranstaltungen im Yama statt, bei denen die Opfer dieses Pogroms begraben werden.`
						]
					},
					{
						text: `3. Juli 1944.`,
						id: 3,
						answerText: [
							`An diesem Tag befreite die Rote Armee die Stadt Minsk von der Besatzung. Das Ghetto wurde am 20. Juli 1941, knapp drei Wochen nach der Besetzung Minsks durch die Nazis Ende Juni, gegründet.`
						]
					}
				]
			},

			{
				id: 5,
				img: `q5.jpg`,
				imgTitle: `Der Stacheldraht, der das Ghetto vom Rest der Stadt trennt, Minsk, 1941–1943`,
				title: `Durften Juden das Minsker Ghetto verlassen?`,
				desc: ``,

				options: [
					{
						text: `Ja, aber nur um zur Arbeit zu gehen.`,
						id: 1,
						answerText: [
							`Richtige Antwort.`,
							`Juden konnten das Ghetto nur als Teil jüdischer Arbeiterteams mit besonderen Anweisungen zum Arbeitsplatz verlassen. Ansonsten drohte die Todesstrafe, das Ghetto verlassen zu haben.`,
							`Aus den Memoiren von Abram Rubenchyk: „Jeden Tag wurden die Arbeitersäulen vom Yubileynaya-Platz, noch vor Tagesanbruch, unter Begleitung zu den Fabriken und Baustellen der Stadt gebracht und im Dunkeln auf den Platz zurückgebracht.“`
						]
					},
					{
						text: `Ja, Juden konnten das Ghetto frei verlassen, wann immer sie wollten.`,
						id: 2,
						answerText: [
							`Nicht ganz richtig.`,
							`Juden konnten das Gebiet nur als Teil jüdischer Arbeiterteams mit einer besonderen Ausrichtung zum Arbeitsplatz offen verlassen. Ansonsten wurden diejenigen, die gingen, mit der Todesstrafe bedroht.`,
							`Trotzdem verließen die Gefangenen heimlich das Ghetto, um zumindest ein paar Dinge gegen Essen einzutauschen und gefährdeten so ihr Leben. Die Möglichkeit, das Ghetto vorübergehend zu verlassen oder sogar zu verlassen, ergab sich aus der Tatsache, dass durch den Draht, der das Ghetto umgab, Chancen bestanden, insbesondere als Teenager oder Kind, durchzukommen.`
						]
					},
					{
						text: `Nein, sie durften nie ausgehen.`,
						id: 3,
						answerText: [
							`Nicht ganz richtig.`,
							`Es war nicht erlaubt, für diejenigen zu gehen, die nicht arbeiten konnten und nicht der speziellen Arbeitsteams angehörten. Aber diejenigen, die arbeiteten, schafften es auf diese Weise herauszukommen, um zumindest etwas zu essen für die Familie zu bekommen.`
						]
					}
				]
			},

			{
				id: 6,
				img: `q6.jpg`,
				imgTitle: `Мал. Фота рабочай калоны з Мінскага гета`,
				title: `Warum trug die jüdische Bevölkerung während der Besatzung einen gelben Fleck?`,
				desc: ``,

				options: [
					{
						text: `Um herauszufinden, wer der jüdischen Nationalität angehört.`,
						id: 1,
						answerText: [
							`Falsch.`,
							`Diese Initiative gehörte den Nazis, um es ihnen zu erleichtern, Juden zu identifizieren und die Gesetze der nationalsozialistischen Rassenpolitik auf sie anzuwenden, die darauf abzielen, Juden aus allen Bereichen der Gesellschaft zu entfernen und sie durch den Status „untermenschlich“ zu demütigen.`
						]
					},
					{
						text: `Als Dekoration.`,
						id: 2,
						answerText: [
							`Falsch.`,
							`Dieser Patch war demütigender Natur und unterschied Juden von der Gemeinschaft, was die Anwendung der nationalsozialistischen Gesetze der Rassenpolitik gegenüber ihnen erleichterte, um Juden aus allen Bereichen der Gesellschaft zu entfernen, ihre tägliche Demütigung durch den Status "untermenschlich".`
						]
					},
					{
						text: `Um den Nazis die Identifizierung von Juden zu erleichtern.`,
						id: 3,
						answerText: [
							`Richtige Antwort.`,
							`Die Besatzungsbehörden verwendeten dieses besondere Kennzeichen der Juden, um die Gesetze der nationalsozialistischen Rassenpolitik auf sie anzuwenden, um Juden aus allen Bereichen der Gesellschaft zu entfernen, sie durch den Status "untermenschlich" und weitere Ausrottung zu demütigen. Die Hauptform des Pflasters ist ein Stern (in Form des Davidsterns), aber in Minsk wurde eine runde Rüstung verwendet`,
							`Im Laufe der Zeit wurden auch zusätzliche Unterscheidungszeichen für Ghetto-Gefangene eingeführt - rote Rechtecke für Arbeiter und grüne für Angehörige.`,
							`Aus den Erinnerungen von Mikhail Treister, geboren 1927: „Im Ghetto zielt alles darauf ab, einen Menschen nicht nur seines Selbstwertgefühls, sondern auch seines menschlichen Aussehens zu berauben. Hunger, Kälte, Lumpen, Erkennungszeichen - Rüstungen und Schilder mit Hausnummern auf Rücken und Brust ... Sie können nur auf dem Bürgersteig gehen. Wenn Sie einen Deutschen in etwa 15 Metern Entfernung sehen, nehmen Sie Ihren Hut ab." `
						],
						img: `q6_3.jpg`
					}
				]
			},

			{
				id: 7,
				img: ``,
				imgTitle: ``,
				title: `Was waren die Hauptnahrungsmittel im Minsker Ghetto?`,
				desc: ``,

				options: [
					{
						text: `Die Besatzungsbehörden versorgten die Gefangenen des Ghettos in Minsk regelmäßig mit drei Mahlzeiten pro Tag. Es enthielt frisches Gemüse, Obst, Müsli, Fleisch.`,
						id: 1,
						answerText: [
							`Falsch.`,
							`Eine Portion bestehend aus einem Stück Brot, Müsli, Salz oder flüssiger Suppe wurde nur an Gefangene des Minsker Ghettos gegeben, die über die Arbeitsvermittlung arbeiteten. Es war nicht genug für den täglichen Essensbedarf.`,
							`In der Regel unterstützte ein Arbeitnehmer 3-4 behinderte Menschen, die ebenfalls ernährt werden mussten. Die Hauptprodukte für die Insassen des Ghettos waren Kartoffelschalen und anderer Müll, der auf dem Weg zur Arbeit und zurück ins Ghetto gesammelt wurde.`,
							`Aus den Memoiren von Joseph Graifer, geboren 1927: „Ich habe die Straßen geräumt und verschiedene Waren befördert, für die ich in der Regel 100 Gramm Brot mit Rüben oder Kartoffeln erhalten habe.“ `
						],
						img: 'q7_1.jpg'
					},
					{
						text: `Kartoffelschalen und anderer Müll, der auf dem Weg zur Arbeit und zurück ins Ghetto gesammelt wurde.`,
						id: 2,
						answerText: [
							`Richtige Antwort.`,
							`Auch die Gefangenen des Minsker Ghettos, die die Arbeitsvermittlung durchgearbeitet hatten, hatten Anspruch auf eine Portion bestehend aus einem Stück Brot, Müsli, Salz oder flüssiger Suppe als Bezahlung. Es war nicht genug für den täglichen Essensgebrauch. In der Regel unterstützte ein Arbeitnehmer 3-4 behinderte Menschen, die ebenfalls ernährt werden mussten.`,
							`Aus den Erinnerungen von Mikhail Treister, geboren 1927: „Die Gurke aus Heringsfässern gilt als Delikatesse. Sie essen Pfannkuchen mit Kartoffelschalen, Speck, der in einer Lederfabrik von alten Häuten abgekratzt wurde, Brei, der, wenn möglich, von der Arbeit gebracht wurde."`
						],
						img: 'q7_2.jpg'
					},
					{
						text: `Jeder im Ghetto von Minsk hatte Anspruch auf eine tägliche Portion bestehen aus einem Stück Brot, Müsli, Salz oder flüssiger Suppe.`,
						id: 3,
						answerText: [
							`Nicht ganz richtig.`,
							`Diese Regeln galten nur für die Gefangenen, die Teil der Arbeiter waren. Aber es war eine sehr kleine Menge Essen. Daher suchten diejenigen, die es schafften, aus dem Ghetto herauszukommen oder zu arbeiten oder heimlich in die Stadt zu gehen, nach Möglichkeiten, zumindest etwas zu essen zu bekommen. Die Hauptprodukte für die Gefangenen des Ghettos waren Kartoffelschalen und anderer Müll.`,
							`Aus den Memoiren von Mikhail Treister, geboren 1927: „Man muss irgendwie leben, man muss einen Job bekommen, aber wer wird einen 14-jährigen Jungen nehmen, und sogar ohne einer speziellen Ausbildung. Ich war also 16 und Schuhmacher.`,
							`Die Dokumente wurden verbrannt. So ging ich fast zwei Jahre lang unter Begleitung zur Arbeit in einen Konvoi, wo ich brutal für eine Schüssel Balanda und 150 Gramm Brot ausgebeutet wurde.`
						],
						img: 'q7_3.jpg'
					}
				]
			},

			{
				id: 8,
				img: ``,
				imgTitle: ``,
				title: `War es der nichtjüdischen Bevölkerung möglich, sich der nationalsozialistischen Politik gegenüber Juden zu widersetzen?`,
				desc: ``,

				options: [
					{
						text: `Nein, denn sonst hätten die Nazis die helfende Person getötet.`,
						id: 1,
						answerText: [
							`Nicht ganz richtig.`,
							`Um den Juden zu helfen, wurde die Todesstrafe gedroht, aber trotzdem gab es diejenigen, denen es nicht gleichgültig waren und den Gefangenen Essen brachten, sie bei sich versteckten und sich den Partisanen anzuschloßen.`
						]
					},
					{
						text: `Alle haben den Juden geholfen.`,
						id: 2,
						answerText: [
							`Falsch.`,
							`Die Nazipolitik zielte darauf ab, die Bevölkerung gegen die Juden zu hetzen. Einer der Faktoren, die die Chance für Juden einschränkten, war die Drohung der Todesstrafe. Viele fürchteten um das Leben ihrer Kinder und nahmen die Position von Beobachtern ein. Einige gingen leider den Weg der Zusammenarbeit mit den Besatzern und konnten die Zufluchtsorte der Juden aufdecken.`,
							`Aber es gab diejenigen, die dennoch keine Angst hatten, den Juden zu helfen, und ihr Leben riskierten, indem sie mit Essen halfen, ihnen die Gelegenheit gaben, sich zu verstecken und sie sogar zu den Partisanen schickten. Die Wahl hing vom Grad der Bedrohung und den menschlichen Eigenschaften der Person ab.`,
							`Aus den Erinnerungen von R. Yadzviga, geboren 1924: „Ja, jeder wusste, dass sie getötet wurden. Sowohl die Deutschen als auch die Juden wussten, dass sie erschossen wurden ... Ich konnte nichts tun, ich saß im Fenster und sah ihnen beim Gehen zu. Und ich denke, mein Gott, sie werden sterben, warum rennen sie nicht weg?"`
						],
						img: 'q8_2.jpg'
					},
					{
						text: `Es bestand die Möglichkeit einer Hilfe, jedoch ging man so das Risiko ein, erschossen zu werden.`,
						id: 3,
						answerText: [
							`Richtige Antwort.`,
							`Offener Widerstand gegen die Nazipolitik könnte zum Tod führen. Es könnte jedoch immer noch die Möglichkeit geben, Juden heimlich zu helfen. Jemand wagte es, mit Obdach zu helfen, jemand mit Essen usw. Es hing von einer Person ab, ob sie Beobachter blieb oder unter Todesschmerzen aktiv half oder diese Menschen sogar an die Invasoren verriet.`,
							`In der modernen Welt wird der Grad der Schuld nicht nur für den Täter, sondern auch für den sogenannten Zuschauer in einer Situation, in der Menschenrechte verletzt werden, wie es im Holocaust geschehen ist, ausführlich diskutiert. Nicht der Täter, sondern auch nicht das Opfer, der Beobachter war nicht direkt an den Handlungen des Täters beteiligt, sondern hatte die Fähigkeit, sich einzumischen, um dem Opfer zu helfen. Die Wahl der Verhaltensstrategie hing von der spezifischen Situation und der Person ab.`,
							`Aus den Erinnerungen von R. Yadzviga, geboren 1924: „[Die Juden] wurden durch die Kollektivfarm geführt. Weißt du, jeder schaut. Wenn also eine vernünftige andere [Mutter] Ihr Kind dort in der Menge steckt, verstehen Sie das? Um zu retten ... Die Leute haben sie versteckt, weggenommen ... Ich konnte nichts tun, ich saß am Fenster und sah alles. Und ich denke, mein Gott, sie werden sterben, warum rennen sie nicht weg?`,
							`... die Jüdin allein rannte ich in unseren Wald. Und in unserer Nachbarschaft ... ein Junge – so alt wie ich -, sein Name war Mischka. Also sagte er zu den Deutschen: Sie sollen weglaufen. Der Deutsche holte sie ein und erschoss sie. Und sie trug einen Pelzmantel, obwohl es warm war ... Also zog sie diesem Junge seinen Mantel aus. Ich habe alles genommen. Kannst Du Dir vorstellen? Das sind sie ... Jeder wusste, dass er ein Schurke ist. " `
						],
						img: 'q8_3.jpg'
					}
				]
			},

			{
				id: 9,
				img: `q9.jpg`,
				imgTitle: `Zeichnung von Lasar Ran "Hilfe"`,
				title: `Was ist die "Malina" im Minsker Ghetto?`,
				desc: ``,

				options: [
					{
						text: `Ein geheimer Ort, der von den Gefangenen des Ghettos als vorübergehender Unterschlupf während der Zerstörung der jüdischen Bevölkerung durch die Besatzungsbehörden eingerichtet wurde.`,
						id: 1,
						answerText: [
							`Richtige Antwort.`,
							`Dieses Wort kommt aus dem Hebräischen und bedeutet "Schutz". Die Gefangenen versuchten zu überleben und richteten dafür solche geheimen Verstecke ein, in denen man sich verstecken konnte. Es könnte ein Keller sein, ein unterirdischer Durchgang, eine Kammer hinter einer Innenwand eines Schranks, ein Dachboden mit einem geheimen Loch…`,
							`Nach den Erinnerungen von Sima Margolina, geboren 1931: „In dem für 5-6 Personen konzipierten Tierheim wurden 10-12 Personen verprügelt, darunter kleine Kinder und alte Menschen. Sie standen nahe beieinander. Der Körper war taub, der Mund war trocken, niemand änderte die Position, es war unmöglich."`
						],
						img: 'q9_1.png'
					},
					{
						text: `Der Ort, an dem Theateraufführungen aufgeführt wurden, welche die Gefangenen gern sahen.`,
						id: 2,
						answerText: [
							`Falsch.`,
							`"Malina" ist ein geheimes Versteck, in dem sich die Gefangenen versteckten, weil es ihnen helfen könnte, zu überleben. Sie benutzten Keller, unterirdische Gänge, Kammern hinter der Innenwand des Schranks, Dachböden mit einem geheimen Loch.`,
							`In der Geschichte des Minsker Ghettos gab es nach den Erinnerungen von Zeugen nur eine Theateraufführung, die 1941 von deportierten jüdischen Schauspielern aus Brünn für die Besatzungsverwaltung des Ghettos vorbereitet wurde.`,
							`Nach den Erinnerungen von Siamyon Dobin, geboren 1931: „In der Sukhaya Street fand mein Vater in einem heruntergekommenen Haus einen Keller. Luft trat durch den Schornstein ein. Durch das kaum wahrnehmbare Licht, das durch ihn drang, konnten wir die Veränderung von Tag und Nacht sehen. Wir haben versucht, tagsüber zu schlafen und nachts wach zu bleiben, damit draußen kein Lärm zu hören ist."`
						],
						img: 'q9_2.png'
					},
					{
						text: `Ein Himbeerkuchen, zubereitet von den Gefangenen des Minsker Ghettos für die Feiertage.`,
						id: 3,
						answerText: [
							`Falsch.`,
							`"Malina" ist ein geheimes Versteck, in dem sich die Gefangenen versteckt haben, und dies könnte ihnen helfen, zu überleben.
Es ist unwahrscheinlich, dass die Gefangenen die Zutaten für das Backen von Kuchen im Ghetto hatten, wo ständig Hunger herrschte, und ein Streifzug auf der Suche nach Nahrung könnte zum Tod führen.`,
							`In den Memoiren von Eli Goberman heißt es: „Die Kerze brannte mehrere Stunden am Tag. Den Rest der Zeit waren wir im Dunkeln. Die Zeit verging langsam. Frauen sangen traurige jüdische Lieder, Kinder erzählten Märchen und spielten.`,
							`Es gab einen Mangel an Lebensmitteln, Buchhalter Berl erklärte den Kindern, wie man richtig isst: Sie müssen kein Crouton abbeißen - sie müssen es in kleine Stücke abbrechen, es in den Mund nehmen und nicht kauen, sondern saugen." `
						],
						img: 'q9_3.png'
					}
				]
			},

			{
				id: 10,
				img: `q10.jpg`,
				imgTitle: `Gedenkschild für Michail Gebeleu in der Straße M. Gebeleu in Minsk`,
				title: `Gab es im Ghetto von Minsk Widerstand?`,
				desc: ``,

				options: [
					{
						text: `Nein, die Juden unterwarfen sich dem Willen der Besatzer und hofften auf das Beste.`,
						id: 1,
						answerText: [
							`Falsch.`,
							`Die Bedingungen, unter denen sich die Gefangenen des Ghettos von Minsk befanden, brachten sie an den Rand von Leben und Tod, aber der Geist des Volkes wurde nicht gebrochen.`,
							`Aus den Memoiren von Fryda Reisman (in der Mitte abgebildet), geboren 1935: „Sobald der antifaschistische Untergrund im Ghetto organisiert war, wurde mein Vater, Wolf Losik, Mitglied. Papa brachte Waffen mit nach Hause: Revolver, Patronen und legte sie unter die Matratze. Ich lag an diesem Ort.`,
							`Jemand aus der Untergrundgruppe meines Vaters landete in der Gestapo. Er brachte die Faschisten direkt zu uns nach Hause. Papa wurde buchstäblich einige Minuten vor ihrer Ankunft gewarnt. Wolf Moosie hat es geschafft, die Waffen herauszunehmen, die wir behalten haben.`,
							`Die Deutschen traten ein und schlugen meiner Mutter sofort ins Gesicht. Ich versteckte mich unter einem Hocker. Als die Deutschen anfingen zu suchen, gelang es mir, in den Hof zu springen und mich auf der Toilette zu verstecken.`,
							`Die Untergrundleute beobachteten unser Haus die ganze Zeit. Sie haben unsere Familie gerettet. Wann ich aus der Toilette gezogen wurde und wer es getan hat, weiß ich nicht. Anscheinend war ich schon gefroren und verlor das Bewusstsein, meine Hände waren geschwärzt und geschwollen. Die Untergrundarbeiter haben mich gerettet und dann meiner Mutter übergeben. "`
						],
						img: 'q10_1.png'
					},
					{
						text: `Ja, im Ghetto von Minsk gab es Widerstand.`,
						id: 2,
						answerText: [
							`Richtige Antwort.`,
							`Die Bedingungen, unter denen sich die Gefangenen des Ghettos von Minsk befanden, brachten sie an den Rand von Leben und Tod, aber der Geist des Volkes wurde nicht gebrochen. Es bildete sich ein Untergrund.`,
							`Die Untergrundkämpfer hatten die Aufgabe, die Kommunikation mit der Stadt herzustellen, Waffen und Medikamente zu sammeln, Gefangene aus dem Stacheldraht zu holen und Geheimdienstaktivitäten über die Pogrome durchzuführen, die die Deutschen vorbereiteten.`,
							`„Rächer des Ghettos“ - so nannte der im Ghetto Minsk überlebende Untergrundarbeiter Hirsch Smolyar seine Kameraden.`
						],
						img: 'q10_2.jpg'
					},
					{
						text: `Ja. Seine Mitglieder haben dank einen Aufstand ausgelöst zu denen die Gefangenen des Ghettos von Minsk freigelassen wurden.`,
						id: 3,
						answerText: [
							`Nicht ganz richtig.`,
							`Ja, es gab einen Untergrund, aber er war nicht an offenen Widerstandsaktionen beteiligt. Seine Aufgabe war es, die Kommunikation mit der Stadt herzustellen, Waffen und Medikamente zu sammeln, Gefangene aus dem Stacheldraht zu holen und Geheimdienstaktivitäten über die Pogrome durchzuführen, die die Deutschen vorbereiteten.`
						]
					}
				]
			},

			{
				id: 11,
				img: `q11.jpg`,
				imgTitle: `Medaille der Gerechten unter den Völkern`,
				title: `Wer wird der Gerechte unter den Völkern genannt? `,
				desc: ``,

				options: [
					{
						text: `Nichtjüdische Menschen, die während des Holocaust Juden gerettet haben.`,
						id: 1,
						answerText: [
							`Richtige Antwort.`,
							`Bei der Entscheidung berücksichtigt Yad Vashem verschiedene Arten der Unterstützung (z. B. die Ausstellung falscher Dokumente, die Gewährung von Asyl usw.). In der Regel wurden gewöhnliche Menschen zu Retter, die selbst durch den Krieg Schwierigkeiten und Leiden erlebten. Sie zeichneten sich durch Menschlichkeit und die Bereitschaft aus.`,
							`Maya Krapina-Levina, geboren 1935, erinnerte an das Kunststück der Gerechten: „Im Dorf Parechcha waren ungefähr 40 jüdische Kinder. Die Partisanen wussten nicht, was sie tun sollten und beschlossen, die Kinder im selben Haus unterzubringen.`,
							`Sie machten ein Strohbett, auf dem wir in unseren Kleidern schliefen. Sie fütterten alle aus einem Trog: Sie gossen Wasser ein und fügten Mehl hinzu. Als die Partisanen erkannten, dass ein gemeinsames Zuhause für Kinder keine Option war, wurden wir "auf die Hütten" verteilt.`,
							`Stellen Sie sich 40 jüdische Kinder im Dorf vor! Die Deutschen waren ständig hier, und niemand gab nach. Als die Deutschen den nächsten "Marathon" organisierten, nahmen die Bauern Essen und die Kinder und versteckten sich im Sumpf. Manchmal konnten sie zwei oder drei Tage dort sitzen." `
						],
						img: `q11_1.jpg`
					},
					{
						text: `Juden, die im Holocaust gerettet wurden.`,
						id: 2,
						answerText: [
							`Falsch.`,
							`Nichtjüdische Menschen, die während des Holocaust absichtlich Juden gerettet haben. Für die Tatsache, dass sie trotz der Gefahr des Todes die Menschheit bewahren und ihrem Nachbarn helfen konnten.`
						]
					},
					{
						text: `Partisanen, die gegen die Invasoren kämpften.`,
						id: 3,
						answerText: [
							`Falsch.`,
							`Aus den Erinnerungen der Gerechten Raisa Siamashka, geboren 1930: „Der Krieg hat mich für immer mit zwei jüdischen Mädchen verbunden, die vor dem Krieg meine Klassenkameraden waren. Ida wurde völlig allein gelassen: Ihr Vater, ein Musiker, ging am Vorabend des Krieges auf Tournee, ihre Mutter, eine Angestellte des NKWD, wurde evakuiert und man erlaubte ihr nicht einmal, für das Kind nach Hause zu rennen.`,
							`Ida kam zu uns und meine Mutter erlaubte ihr zu bleiben. Im Juli 1941 ging Nina ins Ghetto, wo sie in einem Waisenhaus landete. Unter diesen Umständen konnte keiner der Gefangenen sie zu seiner Familie bringen.`,
							`Ich ging oft ins Ghetto, meine Mutter gab Essen und ich trug sie zu unseren Freunden - ehemaligen Nachbarn. Im Ghetto besuchte ich auch Nina Tseitlinas Familie, nach den ersten Pogromen begann sie zu uns nach Hause zu kommen.`,
							`Während des dritten Pogroms starben Ninas Mutter und Schwester, sie selbst überlebte, weil sie bei uns war. Also lebten bis 1943 diese Mädchen in unserer Familie. "`
						],
						img: `q11_3.jpg`
					}
				]
			},

			{
				id: 12,
				img: `q12.jpg`,
				imgTitle: `Deportationen aus Westeuropa, November 1941`,
				title: `Warum wurden Juden aus westeuropäischen Ländern zur Ausrottung nach Osten deportiert?`,
				desc: ``,

				options: [
					{
						text: `In Westeuropa gab es nicht genügend Orte.`,
						id: 1,
						answerText: [
							`Falsch.`,
							`Sie wurden weiter nach Osteuropa deportiert, weil sie nicht wollten, dass normale Bürger des Dritten Reiches von der kriminellen Politik der Nazis erfahren - Juden zu töten.`,
							`Aus den Erinnerungen von Kurt Marx (geb. 1929), dessen Eltern in Maly Traszjanez getötet wurden: „1942 erhielt ich den letzten Brief [von meinen Eltern]. Ich wusste nicht, was los war, sie schrieben Folgendes: "Wir gehen jetzt weit weg, wo wir arbeiten werden, aber wir wissen nicht genau, wo."`,
							`[…] 1942 kamen meine Eltern in Minsk in Maly Traszjanez an. Das habe ich erst 1994 erfahren ... Es war ein Zug vom 20. Juli 1942. Ich habe den letzten Brief am 19. Juli des Vortages erhalten. Sie kamen ein paar Tage später an und kamen direkt vom Bahnhof nach Maly Traszjanez..." `
						],
						img: `q12_1.jpg`
					},
					{
						text: `Die Deportierten selbst wollten nach Osten gehen.`,
						id: 2,
						answerText: [
							`Falsch.`,
							`Die Nazis zwangen die Juden zur Deportation. Gleichzeitig unterstützten sie die Illusion, dass dies eine Umsiedlung an einen neuen Ort ist, an dem es eine Gelegenheit für ein neues Leben gibt, an dem sie gefragt sein werden. Die Reisenden mussten sich sogar eine Fahrkarte kaufen.`,
							`Aus einem Brief von Oskar Hoffmann, der an Maly Traszjanez deportiert wurde, an die Familie Bernauer, an Troisdorf, Briefmarke von Hannover am 28.7.42: „… Die Einstellung des Begleitpersonals während der Reise war ausgezeichnet, ein Schwachpunkt war meiner Meinung nach die schlechte Möglichkeit, im Zug zu schlafen.`,
							`In den Personenwagen [Kölner Zug] wurden wir in Wagen von 8 Personen aufgeteilt. Danach kamen wir in Wolgonye [Vaukavysk] an und wir wurden zusammen mit unserem Gepäck bis zu 50 Personen im Wagen untergebracht.`,
							`Wie ich gehört habe, besteht eine klare Möglichkeit, dass wir in unseren Berufen bei den örtlichen Unternehmen arbeiten können. Wenn möglich, senden Sie mir bitte mein Zertifikat, da es hier verifiziert werden kann."`
						],
						img: `q12_2.jpg`
					},
					{
						text: `Während des Krieges betrachteten die Nazis das besetzte Gebiet der UdSSR als Ort der Massenvernichtung.`,
						id: 3,
						answerText: [
							`Richtige Antwort.`,
							`Ab Juni 1941 begannen die Deutschen mit Massenexekutionen sowjetischer Juden. In europäischen Städten war dieser Ansatz jedoch fast unmöglich. Dann kamen die Nazis auf eine Deportation nach Osten. Minsk wurde zu einem der Zentren der Tötung deportierter Juden.`,
							`Um Juden von ihrem Wohnort in die osteuropäischen Länder zu deportieren, nutzten die nationalsozialistischen deutschen Behörden die Eisenbahnen. Es wurden sowohl Personen- als auch Güterwagen eingesetzt. Während der Deportationen versorgten die Nazis die Menschen in der Regel nicht mit Nahrung und Wasser, auch wenn sie tagelang auf einem Eisenbahnzweig stehen mussten und darauf warteten, dass andere Züge vorbeifuhren.`,
							`1941 nach Minsk deportierte westeuropäische Juden wurden im Sondergetto des Minsker Ghettos angesiedelt. Sie kannten die Sprache der lokalen Bevölkerung nicht und es war für sie viel schwieriger, sich an das schwierige lokale Leben anzupassen. Diejenigen, die von Mai bis Oktober 1942 mit dem Zug ankamen, wurden direkt nach Blagoushchyna in der Nähe von Maly Traszjanez geschickt und getötet.`
						]
					}
				]
			},
			{
				id: 13,
				img: `q13.jpg`,
				imgTitle: `Seite aus der Werbebroschüre der Firma "Gaubshat", die Karosserien für "Gaskammern" herstellte`,
				title: `Über welche Maschinen sprechen wir? `,
				desc: `Zoya Aboz, geboren 1929: „Während eines der Pogrome blieben wir drei Tage im Keller der Gestapo. Die Kinder wurden auf die Straße vertrieben. Es stellte sich heraus, dass Gaskammern gereinigt werden mussten. Die Aufgabe war folgende: Putzen Sie den Rost aus dem Boden. Es gab keine Leichen, nur irgendeine Art von Müll. Wir haben Gaskammern gereinigt und sind dann zurück in den Keller gegangen."`,

				options: [
					{
						text: `Ein versiegelter Van (Auto), in dem die Nazis den Mord an Menschen mit Kohlenmonoxid (CO) organisierten.`,
						id: 1,
						answerText: [
							`Richtige Antwort.`,
							`Diese Autos wurden auch Gazvagen genannt, weil sie eine mobile Gaskammer waren, die für den Massenmord an Menschen verwendet wurde. In der Literatur und in Memoiren werden sie oft als "Gaskammern" bezeichnet.`,
							`Zumindest seit Herbst 1939 verwenden die Nazis Kohlenmonoxid, um psychisch kranke, geistig behinderte und körperlich behinderte Menschen zu töten.`,
							`Augenzeugen zufolge konnte der Raum eines versiegelten Lieferwagens, in den Kohlenmonoxid (CO) eingebracht wurde, bis zu 100 Personen aufnehmen. Die Opfer starben durch Ersticken. Das Töten von Menschen in solchen Lieferwagen wurde hauptsächlich von Spezialteams durchgeführt.`
						],
						img: `q13_1.jpg`
					},
					{
						text: `LKW.`,
						id: 2,
						answerText: [
							`Stimmt nicht ganz.`,
							`Dies ist ein Auto zum Transport von Personen, ausgestattet mit einem Gasversorgungssystem. Beim Einschalten starben die Opfer eines qualvollen Todes. Bewohner der besetzten Gebiete nannten diese Autos "Gaskammern".`
						]
					},
					{
						text: `Krankenwagen.`,
						id: 3,
						answerText: [
							`Falsch.`,
							`Richtig ist ein unter Druck stehender Lieferwagen (Auto), in dem die Nazis die Tötung von Menschen mit Kohlenmonoxid (CO) organisierten.`,
							`Maya Krapina-Levina, geboren 1935, erinnert: Am 21. Oktober 1943 verließ ich im Ghetto das Haus und sah eine große Anzahl von Gaskammern in der Nähe des zentralen Tors. Wir haben sofort vermutet, dass es ein Pogrom war. Ich rannte ins Krankenhaus und rief meinen Bruder durch das Fenster.`,
							`Er ging aus dem zweiten Stock entlang eines Abflussrohrs hinunter. Wir wussten, dass alle "Himbeeren" bereits überfüllt waren und beschlossen, durch den jüdischen Friedhof zu fliehen. Wir kletterten unter den Draht, rissen die gelbe Rüstung ab und sahen, dass ungefähr 15 Kinder hinter uns her liefen.`,
							`Mein Bruder sagte, er kenne den Weg zu den Partisanen und versprach, die anderen Jungs dorthin zu bringen, vorausgesetzt, sie würden mich abwechselnd erschöpft auf ihren Schultern tragen." `
						],
						img: `q13_3.jpg`
					}
				]
			},
			{
				id: 14,
				img: `q14.jpg`,
				imgTitle: `"Tor der Erinnerung". Minsk, 2015`,
				title: `Wofür ist Maly Traszjanez bekannt?`,
				desc: ``,

				options: [
					{
						text: `Ort der Gefangenschaft während der Besetzung von Minsk.`,
						id: 1,
						answerText: [
							`Falsch.`,
							`Traszjanez ist bekannt dafür, dass es sich um einen Sammelbegriff für drei Vernichtungsorte handelte, zu denen auch ein Arbeitslager gehörte, in dem Menschen für einige Zeit festgehalten werden konnten.`
						]
					},
					{
						text: `Ort der berühmtesten Schlacht des Großen Vaterländischen Krieges.`,
						id: 2,
						answerText: [
							`Es ist nicht wahr, in der Nähe des Dorfes Maly Traszjanez gab es von Ende April bis Anfang Mai 1942 bis Juli 1944 das größte Vernichtungsort im besetzten Gebiet der UdSSR.`
						]
					},
					{
						text: `Die größte Vernichtungsort der Besetzten das Gebiet der UdSSR.`,
						id: 3,
						answerText: [
							`Richtige Antwort.`,
							`Es existierte in der Nähe des Dorfes Maly Traszjanez von Ende April bis Anfang Mai 1942 bis Ende Juni 1944.`
						]
					}
				]
			},
			{
				id: 15,
				img: `q15.jpg`,
				imgTitle: `Hinter dem Stacheldraht. Aus der Serie "Minsk Ghetto". Radierung. 1962-1972`,
				title: `Wann wurde das Ghetto in Minsk befreit?`,
				desc: ``,

				options: [
					{
						text: `3. Juli 1944 von der Roten Armee befreit `,
						id: 1,
						answerText: [
							`Leider gibt es keine.`,
							`Das letzte Pogrom fand am 21. und 23. Oktober 1943 statt, danach hörte das Minsker Ghetto auf zu existieren.`
						]
					},
					{
						text: `21.-23. Oktober 1943 `,
						id: 2,
						answerText: [
							`Richtige Antwort.`,
							`In diesen Tagen fand das letzte Pogrom statt, als das Minsker Ghetto endgültig liquidiert wurde.`
						]
					},
					{
						text: `7. November 1941`,
						id: 3,
						answerText: [
							`Es ist nicht wahr.`,
							`Dieser Tag war der erste der berühmtesten Pogrome. Das Ghetto bestand dann noch etwa zwei Jahre bis zum 23. Oktober 1943, als es endgültig liquidiert und seine Bewohner getötet wurden.`,
							`Aus den Memoiren von Kh.I. Rubinchyk über das Pogrom am 7. November 1941: Am 7. November um 5.30 Uhr kamen mit Schaufeln und Schusswaffen bewaffnete Gruppen an. Sie brachen in Türen ein, brachen in Häuser ein und jeder, der zu Hause war, wurde auf die Straße vertrieben. Dann stellten sie sich in Kolonnen auf und führten alle zur Khlebnaya-Straße.`,
							`Dort wurden vorbereitete Autos geparkt. Menschen mit Behinderungen, die sich nicht bewegen konnten, wurden aus der Wohnung gebracht und wie Brennholz in Autos geworfen ... An diesem Tag wurden etwa zehntausend Juden herausgenommen. Sie brachten sie nach Tuchinka, in das Gebiet der Ziegelfabriken.`,
							`Da die Autos schneller heraufgebracht wurden, als die Maschinengewehre Zeit zum Schießen hatten, befanden sich die eingebrachten Personen immer noch in kalten Baracken. Aus diesen Baracken wurden sie von 10 Personen in die im Voraus gegrabenen Gruben vertrieben, gezwungen, sich auszuziehen und zu schießen."`
						]
					}
				]
			},
			{
				id: 16,
				img: `q16.jpg`,
				imgTitle: `Ein Artikel in der Zeitung "Pravda" und eine sowjetische Karikatur zum Thema "Die Angelegenheiten jüdischer Ärzte"`,
				title: `Warum sprachen in der Sowjetzeit nicht viele Juden davon, Gefangene von Ghettos und Konzentrationslagern der Nazis zu sein?`,
				desc: ``,

				options: [
					{
						text: `Sie betrachteten es als eine Erfahrung, für die sie sich schämten.`,
						id: 1,
						answerText: [
							`Falsch.`,
							`Das Schweigen war auf die offizielle Politik des Antisemitismus zurückzuführen, als es nicht akzeptiert wurde, sich als Jude anzuerkennen, und aufgrund der ethnischen Zugehörigkeit verfolgt wurde, weil es zu Problemen im Alltag führen konnte. Dies wurde auch durch die mangelnde Bereitschaft erleichtert, an das innere Trauma zu erinnern, da viele überlebende Juden aus Belarus im Holocaust ihre Angehörigen verloren haben.`
						]
					},
					{
						text: `Wegen der Unwilligkeit, an das Trauma zu erinnern und sich Manifestationen von Antisemitismus und Verfolgung zu stellen, weil sie sich im besetzten Gebiet befinden.`,
						id: 2,
						answerText: [
							`Richtige Antwort.`,
							`Nach dem Krieg wurde auf staatlicher Ebene eine Politik des Antisemitismus verabschiedet. Mit einer solchen Politik konzentrierte sich der Staat nicht darauf, Juden zu helfen - die Opfer eines Völkermords aufgrund ihrer ethnischen Zugehörigkeit waren. Es gab auch Einschränkungen in Bezug auf Karriere und Ausbildung für diejenigen, die im Fragebogen angaben, im besetzten Gebiet zu bleiben.`,
							`Galina Kulchaeva (geb. 1916): „In den 50er Jahren wurde ich zum KGB gerufen. Sie fragten: "Sag mir, wie du überlebt hast?" Ich sage: „Ist es schlimm, dass ich am Leben geblieben bin? Ist es schlimm?"`
						]
					},
					{
						text: `Es war ihnen verboten, darüber zu sprechen.`,
						id: 3,
						answerText: [
							`Falsch.`,
							`Offiziell verbot niemand. Es wurde jedoch auch keiner dafür ermutigt. Dies war auf die allgemeine Politik des Antisemitismus in der Sowjetunion zurückzuführen, deren Folge die mangelnde Bereitschaft der Behörden war, die Tatsache des Völkermords am jüdischen Volk auf nationaler Basis anzuerkennen.`
						]
					}
				]
			},
			{
				id: 17,
				img: `q17.jpg`,
				imgTitle: `Die skulpturale Komposition "Die letzte Reise", Minsk, 2000`,
				title: `Welcher Ort auf dem Territorium des ehemaligen Minsker Ghettos wurde zum zentralen Ort der Erinnerung und des Treffens für diejenigen, die überlebten und ihre Angehörigen verloren?`,
				desc: ``,

				options: [
					{
						text: `Gedenkstätte "Grube" (“Yama”).`,
						id: 1,
						answerText: [
							`Richtige Antwort.`,
							`1947 verewigten die nach dem Krieg zurückgekehrten Juden der Stadt die Erinnerung an die Opfer des Pogroms vom 2. bis 3. März 1942 und errichteten eines der ersten Denkmäler der UdSSR mit einer jiddischen Inschrift - "Schwarzer Obelisk".`,
							`Und seit dieser Zeit versammelten sich am Jahrestag des Pogroms diejenigen um ihn, die die Erinnerung an die im Ghetto von Minsk Getöteten bewahrten. Im Jahr 2000 wurde ein Denkmal mit der Skulpturengruppe "Die letzte Reise" geschaffen, Trauerereignisse werden zum Gedenken an die Opfer des Holocaust abgehalten.`
						]
					},
					{
						text: `Siegesplatz.`,
						id: 2,
						answerText: [
							`Falsch.`,
							`Dies ist die "Grube"( “Yama”), in der die Opfer des Pogroms am 2. und 3. März 1942 begraben wurden. Dort wurde 1947 ein Denkmal errichtet, und im Jahr 2000 wurde ein Denkmal errichtet, in dem regelmäßig Veranstaltungen zum Gedenken an die Opfer des Holocaust stattfinden.`,
							`Aus den Memoiren von Raman Mardakhovich: „Das Yama war viele Jahre lang ein symbolischer Ort für Minsker Juden. In den 1970er und 1980er Jahren versammelten sich dort jedes Jahr am 9. Mai Tausende von Minsker Juden.`,
							`Gegen 11 Uhr war es unmöglich, die Ratomskaya-Straße entlang zu gehen. Es war weder eine offizielle noch eine Amateur-Kundgebung, niemand hat dieses Treffen jemals angekündigt, aber von Jahr zu Jahr nahm die Zahl der Menschen zu, die dorthin kamen." `
						]
					},
					{
						text: `Der ehemalige jüdische Friedhof.`,
						id: 3,
						answerText: [
							`Nicht ganz richtig.`,
							`Dies ist die "Grube"(“ Yama”), in der die Opfer des Pogroms am 2. und 3. März 1942 begraben wurden. Dort wurde 1947 ein Denkmal für die Opfer errichtet, und im Jahr 2000 wurde ein Denkmal errichtet, in dem häufig Veranstaltungen zum Gedenken an die Opfer des Holocaust stattfinden.`,
							`Es muss jedoch daran erinnert werden, dass während des Krieges tatsächlich Hinrichtungen auf dem Gebiet des ehemaligen jüdischen Friedhofs stattfanden, und jetzt gibt es mehrere Orte der Erinnerung - den „gebrochenen Herd“ und Steine ​​zur Erinnerung an Deportationen und ihre Opfer aus verschiedenen Städten Mitteleuropas. Es gibt auch Ereignisse in Erinnerung an die Opfer.`
						]
					}
				]
			}
		]
	}
};

export default data;
