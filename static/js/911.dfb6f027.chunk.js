/*! For license information please see 911.dfb6f027.chunk.js.LICENSE.txt */
(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[911],{548:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var a,o=n(439),s="ButtonLoadMore_buttonLoadeMore__4vdYp",r=n(791),i=n(184),l=function(e){var t=e.onClickLoadeMoreBtn;return(0,i.jsx)("button",{onClick:function(){t()},className:s,children:"Load more"})},c="TweeterList_twitterList__Lcp7a",u="TweeterListItem_cardLogo__OPLSY",f="TweeterListItem_cardTwitter__D5Qtl",d="TweeterListItem_cardSign__0mxb4",p="TweeterListItem_cardAvatarEllipse__QtvX3",A="TweeterListItem_cardAvatar__aEjho",h="TweeterListItem_countTweets__wXlrU",m="TweeterListItem_countFollowers__t3oEO",g="TweeterListItem_btnFollowBlock__7vJAf",v="TweeterListItem_btnFollow__KuFgr",O="TweeterListItem_btnFollowing__svAKZ",y=n.p+"static/media/card_sign.032662a2a907475127d7.png",w=null!==(a=JSON.parse(localStorage.getItem("stateFollow")))&&void 0!==a?a:[],b=function(e){var t=e.tweetsCount,n=e.followersCount,a=e.avatarSrc,s=e.idItem,l=e.tweetFilter,c=(0,r.useState)(!1),b=(0,o.Z)(c,2),C=b[0],N=b[1],j=(0,r.useCallback)((function(e){var t=w.find((function(e,t){return e.idButton===s}));return void 0!==t&&"false"!==t.stateFollow}),[s]);(0,r.useEffect)((function(){var e=j(s);N(e)}),[s,j]);var E={display:"follow"===l?C?"none":"list-item":"followings"===l?C?"list-item":"none":"list-item"};return(0,i.jsxs)("li",{style:E,className:f,children:[(0,i.jsx)("img",{className:u,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",alt:"logo"}),(0,i.jsx)("img",{className:d,src:y,alt:"sign"}),(0,i.jsx)("img",{src:"data:image/png;base64,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",alt:"line"}),(0,i.jsx)("img",{className:p,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABZCAYAAAC+PDOsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB1bSURBVHgB7V0LeF1Vld77PO4rSZMUWihgkmJBEVqqfPLNh9UGX6MUCzIDw9RRYBz8AGVaQHl8Dqb1G0gZZxRH26qDtGrr5wAWCq3OOHxQmooWQUqKCAylSSiGhtLcm9yb+zgv11r7cfe9Sdqk7wYXnJ5zb85jn/+ss/Zaa6/9X86OMunfETXYqaA1ssIWm9tnRyxq4Zy3cPwjZy20U0T/40YavuyKoijNQ94VRGG3FbKNfsHZ2jidp9lRJJwdYVHAAphzucUuhgWAhYZZ8I8Fay4bOVpLJehRKLejiIW4HUZdYcg3Mi9aF5TsjUca+CMG9GCv1xo5fCEA22pbvAGB5RJYalXEy62LqtZK+CjbAHZEoOMDiFjgR/ggVgUeW9d4svMQOwJyWIFG7XVS/kJAc5Hl8AbLFprLlcoqk2CAxEKmQdN/lE3HZ2HJByMekjyXemBMnYyRlocBAO6DpgdsSVDwQMuTXewwyWEBWgAcLox4tMh2EWDOLEtcXgEYBZEEQ27TGgEibRRLJJ+EbDUBa0mQ5Tnp4eE2rC2r0gThwXgNAJuFAHgU8FV10+wl7DDIIQe6f2fpStu122yXtSDABIoEmAD1GS34ege49ggE2g7plZegkw0WJkE3XJkbBJXA5cx2GIOHyeCNoW3LlWu8ti0O5CzSGg7X6wq8cEnjKbFV7BDKIQO6f0e+xU46Ky3HasUbF7aXE2ChLwEGUP0Sg4VumPlFWLxQg62XUJgR0mo8udRqS3aaBDKCSeDC4lrMjnHm4IJAxxh9tiXoXJosPJGw4dim8KEgcm5onMa72CGQQwJ0/59Ki2ybt9kxq8G2RKcWhVxoUImVQZWLVwwJbF+tSyFpeAigE8hBpG02YazMB+faPCDICmgnZgmQYe3GYR2Hz7QWC4HulM2M8FSwbVE6KIY3NDYdfO0+qEDvAFvc4PqL4QYX4o0q7yGiV1Rorl9gBKyXh6UgFgS4VBAAE8hKo4OobKPJbIQ9uI3mgkVWPeBcrzpTZToQbNRiATYAnbAIaDdpsVhCAO4mKkHnVkTnILDFte+uP8m9gR1EOWhA94KpSLjOg27cmo2vKGlxwEXDAWQPgCRg8xErDQWsJIEu5QOh0bh4eKPwvedv87zC5oJX6Ny950/Pp3Nvpb/6w8tfmzx5crRnzx52/PHHR7t376bu9LMfvaX+I+dcMtOJxerrEpPmxOKJOY7tzsQ2OK4ENm5roGNJ2E7hNqfvBODCrjNLdLb0xpXCrVHJ+TT4313sIMhBAZpAjrmPuzHeQg2OOHVg1GACmJEGFxHgoVACLcEuBsJ8eN7mzOCenz72+59v+MH6xWMKLgB41HTe39+vjAmZ8Ds+/7Omd5585gfrahrmxRPxeajhbsIGkBFgWNfYLI5gp/ABSA1PCBtu2aK3RdPllYIu6E3PPxh2+4CBfuPF/PR4rfsY2ELyKlBCn0szERHApaGIQC7m5ALbHmlylMnlMyt+/tg9K9Y/84OMBIwARLEsCzVXXarsQBuhC2g3XRT3g214/UMOWk/A43lu+vTyppkz/uraRCJ+YSzuNhHYAHC8Ri6wHUsJ7UZ7bsNiueL0aLq8AoBtHzjYBwQ0+MctkRs8rkHGDs/HTo0RyCUCOWQFBDcbsELWF9pcDDPZLAD85D0rfrL+LqW9FfHflClTCOhdu3bRd9OmTWO2bUc7d+6sbr8CXt2LVfWZ1gj6vTduua2mtm5BPOk2aaBhSdQi2BZpvJMU3oqNYHPhIZFmewD2AZiR/QYazUXcsh93EnaLbQtzEZggA8CovQhyIYtA+/R5MJdd8fBvV915z9olg4ziPi3hCSecwADY6JRTTlGARi0tLayrqyuaMWMGe+WVV7SJeM973sNKpRKH7+g+5H4V4DIBuvpM3339C6ubz5nxoVtTNckFqM2JWocl6sS6Aux4Fdig2cXQPX/afoJtsf2UGLMftOMWgRxFotMTthjMRC4kDc4PwpLxYfHY0ECp57Xernnzb55+K4CcYQLkCMDFdYDbADKuAwCZvmttbfWPO+44+g4ADeQxtD7zzDPxO/+cc86h7wDkAMCnv8FDCQB4+h7eBEoxwRtCD/U/1y7qmndz07VvvdV37dBgqWdoANqGbRzwqd2oIHgPqCxBidPVKBCKWS0x5j3Y2ZFuZPsh4wYa3azd20t3g1s0m0CG5qNv7KEm58uanB/Exnt0A9mB4uYtL2ycd+P3PtmBp4CbjiRooQQ3BJB8CS4Bi8vGjRvDU089lfZbvHixuQ7uu+8+elDPPPOMBn/q1KmhfCihAr63t5f2e/PNN+lvELZT0P+3XztzDbYpO1jcLNrqU5uLQxJs6sQxgOLUUgqE4nz2iSel2th+yLhNR+/L+SvjCWcluHF0eCQ7Pk92fKgVBWjwEDS8QCDnln/yy023MZnNRNsrbzpU34FWRnV1dREAq1NHUqJIxNwRR4TQxeAiwGCU6hChC37mOjNFx1vGmoGG22hiQMs5PAAL3iKOnSa0g0zKI/++47aG+km3Jic5LFmHpsQB2y18b/RIRICDwZIIrqCfueHEdyfuZuOQcQHd9Vx6ek1t6vfQazdYFoLMRAiN7pn0j0k7MgLodP/A0k/dPP1OBZpcQnN96aWX0it9//33l/NzAtAK72Ic96MPxwdw2WWXWXBu9Tereo1eC3gsfMN/dN86qb72thSCPUmCje6fdP2wg+QIdoi+f5gGt/S9084Ye/ZvPKaDJ1PJb8IFG+huKAHEyWwIjZadX1YsAwPZdgC5XR5LwIJGabMAANMabG0EQGjtZkJ71THjFaXq+jxgYgLj3IGy6WjDodMNwJOht2veTc1Ls4PZduxXsP0luJdSQaQEVNoAs4kYQmIGEs69io1DUce6I+/pzF6Zqo3di44/mQxP+spF4cYVsOPDjiVNmtz+yRua29EWw+uJx6uOLAQbTDYawTXMAjvEQuZlyZIlHGw8fiaNBpNi+b7P8/m8DX0FmZH//fbOpXX1qetS9S5L1TvaG9E5EleakALEAUPBVdPOSq4aUwP2tQO+hrh648VCV6LGbbZsS4TWlPxRmhxSZzKU9lg2nd/84S9Ou4AJjwI9CQIYOqbohRdeCOBGo7a2tgPR2v0VLh8sk2bJNCG2+fnRZb2/qKtPzEk1ANhgRuK1tsyZiOgRTUgYUKTbVSzm39c8q6F/Xxffl+kgkHu2DS1x4nYz12lOmUP2mNRoEe0Vcl7PC6/87hrlVUiQ6XUFkNGrQK9htIGpQy34cCPZp2qvhwklCNB3l20KO+Eeijm/h4IrSnpFOmeD940mBLEAT6TF4fGFY7n4XoHG9rz0VGa661hXQJQGrRBeBiXmA5kAKoYyAgxY/0B/+5LVn+82vAoyGeiiKfdB3TA7giLBZvjQ0V1EtzCRSGh//sZvze9+ra/rWpWTwXtEoAM58hNKqy8GMvjC7k7yrfdqHZx9NIj1bM22Oo7dbHHhT6oLkUZL04GNyQ/l11z05dNXM0NTmPR7pe97VEnVw8b2kc1GHxzdv8/c/v5Nj654fTm8yde58YC8DhytsTClih4XEyNF2DF6pfhCeHBLWNnlHCajarTI/0awg90mkuMi7SmAltpcCqlTKBb8nq0vP92ONlm+gtpPlqaCH4YOb38kUgLboYo+ZRAVrdu8ut0r+BlPeh84IkQDvIEY7EWosc+CwG3hvm5wr6Zj+1ODF8OwEGkzjpBEAdNjeDQMVRQ55aFsdk07mAzXdUMZPms/WXkW7CgVMXIuOmZwObWLict31tzSn83llosRoFAORghFgxiTkmj4H47ov/Lbwbl7M4nWXhrAXdu+CEcsyPFAs0HDSWJoyRfJcVby/J6Pf6m5He0ygBxJP1WBfMTt8RiFgMWgCQMo8x5++dQDy/xSkKHRH6XRelRemg8wJW7MXghv76h4jvYH/uR9zzdyy7pC11vgkFQohpaU6cDXqZAvrIfEjQoKQsg9UKNlWHwsgKxEgy3zJwT0t358Yzqbyy73qUMM9fBaGAkTQmCLepK5l3zkqnrpDg+TkYAmf7PxhJNbqVflIgWqAmdKIvlljX55x3PLIHFTYZfZ4QlCDoWYuRZ9TxuefGBZUIo00JG+U65iUcydNyT4pPNHu+8RNRojqHjCnY/5DJE8YBUlVqLuAs1Gaf2SVZ/vgnC2OofB2FFsl8cgFYqDWl3y/Q49aBwaJWdSgRFgy3bmMiP3bcqIQFOYGvJWqsMw3gRln8mfhAvm89n1oM3McRzSBPQwjvbObwyC96DfTAhmMCcSFgrZ1aLIJ9JOQflOAWQEmlkXyRMMO+mIQD/8/ccng6/YzKV9Lte/GRU+cMEdfa9sQncOfU9WTuiwY11k5o+Ahog2REXa9JuH1we+6gwlkIaPQj4sYLb2R1saR8JgRBt9asvMWVTJox8M12ejJ0kdQtB59e0f65LunI6y2LGtzVrMXAwCfc+v7uoP4J4jCXQounyxs9RqPOa0k04n81HdKVZHhvRHO+7O5crMiBBI2yTS6BA7Q6+DGbbMyGFMFNH3I8cqozAINsG9z5L115SSoAIhsUVFOI7NWhgb/mabGk1/AT8Swj+xs7br6vWQaOO66GU3MTZq5fJEEt0p+l6pU5nQyPBPeDmLA99bs0c6iQk07Y6jEZxbzeokqlJW7aHemGLA0jgyzSpdogkpkEOndTrf31nd0XH1byTyHxa3mlhVqQNKhUbD689Bo7FXbdSabL4B0nzgP///4tOdZifIJiDYMsPHcCwT8+mZwb5M+e2W+7Cy8kkL0CIPrxiKq+4eEXj7pUezffE6twHr1GzHEr1wqAYmcTzQYxdeNzOJpQBmFMUmpii/GAcH7Oc3DOZT9TFRTgYD1MJpEOXGJUiw5bNe9z/cPPc0wCUwUxBao1UvCXE+g461wXRdKi+LUxqiDBa1YLht+M4TUtSIOw7B4UdmRd3D9lH/iKUZR/TpIKNDrHbvOIDHzMk29KX6o3y28BB1EaIcg5uwogZ6y58tMWtghHBBRM4jn8cyTqg3Ze5Nn940NGIqg6W+Hk3vJ5Jw006rOTMj9V0qRQH7CoCMN900HXozHDYTiumnSHNv4B+sfdMtmQjh4F7EfGshyV9fMU0PRbl8smheCh/RdJiRUBCG3XSQgTSX+8g5I80QmmLuFhvBJ7SRZmWg4Z5x/gsVD5kgKr9apJHDjFJCNUqFwo2duXwEztaHMy/X1Mea4zUOi0HPisM1VFUZiMLxIowR9v3p9dPOu2zGDiaTMBNcqdHttT714X867ryzPrgrnnLJ4xD14JwymaLswme5geJzs+c3nMvKtSwoUbVGc3waoRd2q+SJmYwrzxXBMD3VgBrNjt3c87jlrJazZ9KkJJsZk1DLOaBQZDUzWEsoDxkesCgVR5MAadDu0MhU6aNoFhRHO8VSNfGzjZq2CY00YoP3GnOtRllioE2HSIKIrKZMo3aD56YxUbiOmCb1vGIn5V19piezqweIHQE+1Xg8PqvcjontR6teLZFIfgjLd62qxIXK04c0lup3l//ChgcseC5pCli+VOoOPHP6maHVck6f61pz1VdsArt3RlUr5w6fi/0Vl3MnUdQ4KtppxKw/ncGspsZSSYVGS1PAtm399SYcH8ODwyDS+Q1W9jpwdurZj67d0mA0ZkLL07/oaXZjzizUaK5m+ktvI5QjLwj0813PdsIfI1mGrGVEP3rRtxdkAi/oNidWRlHZEOPwOhb7NZ90xqhDNxNISJvrG+rmCpAN9zkSo01qxCkoBd03f+OyfsbKdd7qJKbp0FVFuI9X8h+hedl6LrZWanqiCHQ85n5OHssmuMBgdXI+zjG3qs1GIDtBSLgVvVIHRo/gdVA0ySvCbeNkcrFwKsJ3b/rlRVOPn/rfNQ0uS0xymIuZPDkFGKf04vgl+tRdr/cdd94n3qGf4gQU3tnxxvTjGhq3x+I25TrUvHZ823G+C85yyGU89uYbu/7uE186DYlXKkov8CQVNhqfApZF4dDNb7dt3uR5QcaTzAPYq5pZDazHw8K/k0+cPKay1WNRZD6aN9ZNorntwjYzjQPNqfRFuZgPSrep87EOdayMJkfOR2N0eP7559syKWJ1/LDv/trGxIWk1bUOFWOLabzIfYF2hIoc06/29L1zgmo1veW9fyy8Ch1hMxYUCFeuPJ0EJ6nmMj4b7B9a/aF/POELsL+PZWXGdBGSCo1Gk2LMjOKZwbe+S4WMNCG+XKWj06doq+NWQ/M7jp+QWo3a/Pof8m1OzG62pDZHEdely76sD8eK2mxucD0rDwcOUzhrhJMroMMLF53RUcoHsmxV0juEkQ47caTccajA75+ffzKzXxMdj2a58tOLmt2E/TlkSdDlF6r+0A91NW2p4PdccP2MR9he3uhqoPX4nxp4zRVyy3CIhsD2yqWrVMYr3HjkxWiYenz8a2zihOJUl5FMxtsA5BZRf2hosx9JTRZF+IODaZzipzAbMfU/mkZjLQNOV4sefXrdMm/Iz+AJFaeGzoHI+mCaVRqzF/a+ONg6EXxqvIc3t3tXuHHnClsyNoj6cBVmR+UpJaDNO/t2UOmFHKym3VmVdo9Wtks74rjgv917fTqXH1rmyXkq2LuK8FzE95GsfMfXK5aI3/vGi4UWdozLrpcKLbbD2tBvpjHSoByY4FtNJiMv5rcMDQ2tvvpfP9aNk/5ZOVAZds5hQFcVKSK7QPjo5nXLCkN+T1GTmaha4fLEGeHuWS1u0lnJjm0Twp2Efa8Tt1qoAwzLM9FEqbKYIVykmWhez8e/1ERmA5RSV9OOVBc+DGhjJ6x8xxOwnzxxZzo9sOdOmk2KpCYFIjURUSOBLeqnMeESS/DWt3q8b7JjFOy3uottbsxqpSnYUXman6DIiIQmS5KXdKafpl/LsuVh5sKUvc1hocp3LFvFQvP5N52+ujDkdRRygncDwfbVtDDKiYgOg1vE0LUIG8yOISHKoNcCcOWsNqIrwjFqNdVPz9cJNAfJUC6/Yf5XTl+NJb2pVEpFgnSqkc5vjXJRWmPHiAMB6om9tP2Za+AimYKm65GTHUtl7aZKEwdZAew2AHsxO0YkvdNvs5xwMbZdgyxNhV8Ky3PdafEznS/85pZp06YhgQtOVt0/ja6qZQiV/WlbfVX3YCbTjmwyOPcbL+rlgzLYJcGnhEdjg2NJpy3TGxz1mt2/07sbNdlxbfKi8B7UFGzF3KBAxntPp3ff+o211+/ANx2TSAy96324W/uyo1SPBwuVQ8FiTZkyxfrxV5+9a9Kk1HVIt6DmSiPlgqMYt+KMmBXxMUouOQg37asOFUvi/gpyQvFEsBKCLpqvQzYZyQQkuJ6iLMoKWgxB8pJd/teLmm5hxszgkULuahlLh2VhKS+cSIN9/SV3NV784Ss3JGtjs4hMBIEmAiikPJP8FgnB2oJcclEoOUB9tqTxFGcVOwqkv9drtS1rJbhx5F2gn6zmtgvirTLIxEGCZC+DpW2XLznrA0g9oZhzWNVo92jX2ydfB74SyKkhT0JG/ztrb+n/3R87FuSzxR5kmckjOdWg5LiAxmFDkbEROT+xnBW1Bd0l0PaVA7uClf29UQs7QoLMv4N9wbdgKO5x6LRbLM0JZRC8yJihYICcz3o9na8+9fe7d+9WZAKMVRZ3HpDpMOs9OLh7FngiVHEKi7X0iw80v//dc34Bmt2EjC3EuFWDBH6CbcuV2m250pQwzZ7bBa/pqroph4dSGEVRK0PWcRH4/FQEo4kQFZWnZJssKfIt6osEyM+9uuWCu356dReymDHh+gZIJiBNhri5vchYfV1lq2lggMkSVvz+G9esbXnvmedtSKYQbDQhAmxF3KfsNpKKINhc0lLKCZFdMHrzkO+Xvt047dCQZhPAteFChtzVtuCuJkSIow9AJhJapckyGMkqJh0AOYeavOWCdsHagIeaJmPMs4PHE1ToERjoaS1wabRm33HNz5rPPaN1Q6LGbUrUOETYp8j7iJJSkkA5McHnTIDzSM/0CsR0socij60DP2bjgYJOvxtQ412MM38BhFZbcUdH4jaUFhO7GWrxkCChLSkixJwAGeKGnqf+uHHeV793eRcTVEXkM+NMLVY1gjIW8MYkpglh5cJsGiAAT4Qv+pvvtJz7rtY1sZQzSxH3KUpKV5oRVxL3Oa4AXFdmRpGcZ67z3Vvh242g9U9wL0rv7Vco8r35lsC2G0JmzbY4Pxta1AqtnE31J1Ylb3WkxvdKZqcXlhkniUvJF27ckLftdy8/sQBA7mYGLQbOE1fF94q17KACbexPx7S2tlowSKBcPlwjzZq14a6e9lRt8jphOuwKsGNKsxOKKZHJMUgJOF2hXJEZhZV12qA7CHZaj0JzNQOKGb8VYJRr0TnEohhkfMNUiDRnqENqQVIbsNxQbvnP/++/lj7y+++nsfNjZUcAqYoCI2c/LuDGK9yo3tFazcr8RPyBr7/4mfpJk5cCwPVEupqUNjupuOQszeFsxwx6eOygdF0bM0swh9+WLmsRH3QVjxqXUNVDipJIBh++plcOKTFUZgGmhFlmYDDTfsntp62Q1MkhRn9IUoidnzGNhI2XVGDcQJcp6ajCEv1rSzK3VICNdnv2Oz+wNJlMzHMlb7NYFGG2CbYY6FX08bSmM3Fd9M2rAVbtMcGVaVuVnA8kS04Z5DI5uDYZBQl2obT5+e0d137le5f3VIGsGc7k1OX9Ym04kAwbAWqCbVKbTZ48mYzBikUdCxprJ9/mxJ0mHK4nbSYK4fKCVMLEcCt5+BFoKlaxZa0fdcG8cjqDMimyQ1W/chEoLVa/G6Ao7YvlURFPjhhR8r7o9/Sndy+9/Osz1zBWMYNB22Wcv4L0nWP1MEYDa7/ELP7D2mEAW7l+tCAvURAEluR/5g/esf3WVDL1GRhNbnKRFj4hqeFjkpU8ZpV/8ED+6oQqEVY23DJaS2gYhT1Ki83yrKCkfjMg0oTgfkmkeCFRlMnls8sffuLeFSt/dUdGaTGeG4kQpXdhAq4YIg8v0IxVgE0LPHmOpQrQUKtYLFrw2nH0SBQHKPjcTU0nvmtOQx1ouGM32TFRvkB8/K74tQlcC5vNNW+//q2VKqB1JackAtAgK6AleQutsepKZBkz2dzAiv95as0KybxuajENdGASDe4lNCoCxhT97U0OVnJed1/SG0FTwtGUIOCwJjOCgCNrOXKB/uj2Zy+cnGycF48nF5g/66G2Lf2jNWLNOB9h3ogCWjHjlAsOcZQ60NtRpuSVNu/JvLH8c+3v/zWrBK+CA4qVk0Qa3PF2fHsD6GCK7hCrtm2l3QpsZCmf976rGz567qVzGmuOnxeLxeZAwqaJXDUFNJe2ms5seBesXGOiwI4kIQBxivhhT744tGEgP7B5yx82dCxf9y8ZvJ6kpUfG9UgyrtMgNDIYSJYwegiKRuJg1RUeCqArtLuvrw+jSDPQoUWCjpTwFv4ShZLPfvSWhrnnzJ85uWbqHMdxmyzLabItXs85PADO6s0WA7g9NGs1DHvCwO8pBPlt+VyuZ+OzD3agDyz5/vXuBlcq0sYRDwcOQDOjw2OV5uGAtHgkUA62aE5n7ChRi0cAHDtM2hm0ikyLqeko8hcpmPxZEN7Y2Mjwsyn4Hb7W+Hc8RGqt+nMkz4nbBKKktde2t9oWjyfaGxcg7BCJApoZPPuysxzJrNCOkuN/WLjCqsKTqm2mTAKCiqCj1iLZIV0czAPSEbFyzpjWCLBk/a3u6A6aFh8J4ZITTiWiHLhRB5JTEBeyOGhZEtZJuU4BSDWwrgEganHBbVhq1QKA1sG6zvxO7qOWlDonLAnomGHMh+G1XCbIYGyjPWYXOzEkMrgWmAQdAWcCgJhcEJSEXBRYKXOBiM0EMml8TkDHhsfFEVz5IBW4cnCtIl3wthBtPsCOq/y2AqQCeEMjaVt+1t8Z+7qQkyBg5QOsyMXImaxvG4C1GDeuyJ5M4myl7bZ8EPQQ5HfDtll5MMIyzYJ6i96WAO9FuGFeFFBmaE+2XgFZbWfVQ6ta/iJjFF6l9SRvVw39i+bsQ/4MljUhEdLeMoMAAAAASUVORK5CYII=",alt:"card avatar ellipse"}),(0,i.jsx)("img",{className:A,src:a,alt:"card avatar"}),(0,i.jsxs)("p",{className:h,children:[t," tweets"]}),(0,i.jsxs)("p",{className:m,children:[C?n+1:n," Followers"]}),(0,i.jsx)("div",{className:g,children:(0,i.jsx)("button",{"data-id":s,"data-follow":C?"true":"false",onClick:function(e){var t=e.target.dataset.follow;N("false"===t);var n=e.target.dataset.id,a=w.find((function(e,t){return e.idButton===n}));if(void 0===a){var o={idButton:n,stateFollow:"false"===t?"true":"false"};w.push(o)}else a.stateFollow="false"===t?"true":"false";localStorage.setItem("stateFollow",JSON.stringify(w))},className:C?O:v,type:"button",children:C?"Following":"Follow"})})]})},C=function(e){var t=e.tweetsList,n=e.filter;return(0,i.jsx)("ul",{className:c,children:t.map((function(e){var t=e.tweets,a=e.followers,o=e.id,s=e.avatar;return(0,i.jsx)(b,{tweetsCount:t,followersCount:a,avatarSrc:s,idItem:o,tweetFilter:n},o)}))})},N=n(689),j="Tweets_buttonBack__5KwK9",E="Tweets_dropdown__ZTQc-",k="Tweets_customOptions__HXvk5",x="Tweets_dropdownMenu__pI8QX",P="Tweets_dropdownControl__iGHke",M=n(315),L=1;var Q=function(){var e=["followings show all","follow","followings"],t=e[0],n=(0,N.s0)(),a=(0,r.useState)([]),s=(0,o.Z)(a,2),c=s[0],u=s[1],f=(0,r.useState)(3),d=(0,o.Z)(f,2),p=d[0],A=d[1],h=(0,r.useState)(!0),m=(0,o.Z)(h,2),g=m[0],v=m[1],O=(0,r.useState)("followings show all"),y=(0,o.Z)(O,2),w=y[0],b=y[1];return(0,r.useEffect)((function(){fetch("https://6454b382a74f994b33468a7b.mockapi.io/tweet").then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u043c\u0430\u0454 \u0434\u0430\u043d\u0438\u0445 \u043f\u043e \u0437\u0430\u043f\u0438\u0442\u0443"))})).then((function(e){u((function(t){return e}))})).catch((function(e){})).finally((function(){}))}),[]),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr",gridGap:"16px",paddingBottom:"24px"},children:[(0,i.jsxs)("div",{className:k,children:[(0,i.jsx)("button",{className:j,type:"button",onClick:function(){n("/")},children:(0,i.jsx)("span",{children:"Back"})}),(0,i.jsx)(M.Z,{options:e,value:t,className:E,menuClassName:x,controlClassName:P,onChange:function(e){b(e.value)}})]}),(0,i.jsx)(C,{tweetsList:function(e,t,n){return e.slice(t,n)}(c,0,p),filter:w}),g&&(0,i.jsx)(l,{onClickLoadeMoreBtn:function(){var e=3*(L+=1);A(e),e>=c.length&&v(!1)}})]})}},694:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var r=o.apply(null,n);r&&e.push(r)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},315:function(e,t,n){"use strict";t.Z=void 0;var a,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!==typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=a?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(791)),s=(a=n(694))&&a.__esModule?a:{default:a};function r(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}var h="Select...",m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?p(e):t}(this,d(t).call(this,e))).state={selected:n.parseValue(e.value,e.options)||{label:"undefined"===typeof e.placeholder?h:e.placeholder,value:""},isOpen:!1},n.dropdownRef=(0,o.createRef)(),n.mounted=!0,n.handleDocumentClick=n.handleDocumentClick.bind(p(n)),n.fireChangeEvent=n.fireChangeEvent.bind(p(n)),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,e),n=t,a=[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value)if(this.props.value){var t=this.parseValue(this.props.value,this.props.options);t!==this.state.selected&&this.setState({selected:t})}else this.setState({selected:{label:"undefined"===typeof this.props.placeholder?h:this.props.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"===typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,t){var n;if("string"===typeof e)for(var a=0,o=t.length;a<o;a++)if("group"===t[a].type){var s=t[a].items.filter((function(t){return t.value===e}));s.length&&(n=s[0])}else"undefined"!==typeof t[a].value&&t[a].value===e&&(n=t[a]);return n||e}},{key:"setValue",value:function(e,t){var n={selected:{value:e,label:t},isOpen:!1};this.fireChangeEvent(n),this.setState(n)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,n=e.value;"undefined"===typeof n&&(n=e.label||e);var a=e.label||e.value||e,r=n===this.state.selected.value||n===this.state.selected,i=(u(t={},"".concat(this.props.baseClassName,"-option"),!0),u(t,e.className,!!e.className),u(t,"is-selected",r),t),f=(0,s.default)(i),d=Object.keys(e.data||{}).reduce((function(t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,u({},"data-".concat(n),e.data[n]))}),{});return o.default.createElement("div",l({key:n,className:f,onMouseDown:this.setValue.bind(this,n,a),onClick:this.setValue.bind(this,n,a),role:"option","aria-selected":r?"true":"false"},d),a)}},{key:"buildMenu",value:function(){var e=this,t=this.props,n=t.options,a=t.baseClassName,s=n.map((function(t){if("group"===t.type){var n=o.default.createElement("div",{className:"".concat(a,"-title")},t.name),s=t.items.map((function(t){return e.renderOption(t)}));return o.default.createElement("div",{className:"".concat(a,"-group"),key:t.name,role:"listbox",tabIndex:"-1"},n,s)}return e.renderOption(t)}));return s.length?s:o.default.createElement("div",{className:"".concat(a,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(this.dropdownRef.current.contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"===typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var e,t,n,a,r,i=this.props,l=i.baseClassName,c=i.controlClassName,f=i.placeholderClassName,d=i.menuClassName,p=i.arrowClassName,A=i.arrowClosed,h=i.arrowOpen,m=i.className,g=this.props.disabled?"Dropdown-disabled":"",v="string"===typeof this.state.selected?this.state.selected:this.state.selected.label,O=(0,s.default)((u(e={},"".concat(l,"-root"),!0),u(e,m,!!m),u(e,"is-open",this.state.isOpen),e)),y=(0,s.default)((u(t={},"".concat(l,"-control"),!0),u(t,c,!!c),u(t,g,!!g),t)),w=(0,s.default)((u(n={},"".concat(l,"-placeholder"),!0),u(n,f,!!f),u(n,"is-selected",this.isValueSelected()),n)),b=(0,s.default)((u(a={},"".concat(l,"-menu"),!0),u(a,d,!!d),a)),C=(0,s.default)((u(r={},"".concat(l,"-arrow"),!0),u(r,p,!!p),r)),N=o.default.createElement("div",{className:w},v),j=this.state.isOpen?o.default.createElement("div",{className:b,"aria-expanded":"true"},this.buildMenu()):null;return o.default.createElement("div",{ref:this.dropdownRef,className:O},o.default.createElement("div",{className:y,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},N,o.default.createElement("div",{className:"".concat(l,"-arrow-wrapper")},h&&A?this.state.isOpen?h:A:o.default.createElement("span",{className:C}))),j)}}],a&&f(n.prototype,a),r&&f(n,r),t}(o.Component);m.defaultProps={baseClassName:"Dropdown"};var g=m;t.Z=g}}]);
//# sourceMappingURL=911.dfb6f027.chunk.js.map